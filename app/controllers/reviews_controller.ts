import type {HttpContext} from '@adonisjs/core/http'
import Book from "#models/book";
import Review from "#models/review";
import {createReviewValidator} from '../validators/review.js'

export default class ReviewsController {

  /**
   * Display review form.
   *
   * @param params
   * @param inertia
   * @param response
   */
  public async create({params, inertia, response}: HttpContext) {

    // Validation Skipped
    // Todo: Add server side validation for id param
    //  Ensure that the book ID exists
    //  Fail if it doesn't w appropriate error response

    try {
      const {id} = params;
      const book = await Book.find(id);
      return inertia.render('review_form', {book: book})
    } catch (e) {

      // Logging Skipped
      // Todo: Include logging detailing the error
      return response.status(500).send({error: 'Error displaying review form.'})
    }

  }

  /**
   * Stores a new review.
   *
   * @param request
   * @param inertia
   * @param auth
   */
  public async store({request, inertia, auth}: HttpContext) {

    const data = request.all()

    try {
      const validated = await createReviewValidator.validate(data)

      // Service/Repository Class Skipped
      // Todo: Refactor below code to ReviewService / ReviewRepository class
      await Review.create(
        {
          book_id: validated.book_id,
          rating: validated.rating,
          comment: validated.comment,
          // @ts-ignore
          user_id: auth.user.id,
        }
      )

      // @ts-ignore
      const books = await Book.query().preload('reviews')
      return inertia.render('book', {books: books})
    } catch (error) {

      // Logging Skipped
      // Todo: Include logging detailing the error
      const book = await Book.find(data.book_id);
      return inertia.render('review_form', {book: book, error: error.messages[0].message}
      )
    }

  }

}

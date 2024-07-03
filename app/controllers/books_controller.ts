import type {HttpContext} from '@adonisjs/core/http'

// Models
import Book from "#models/book";

export default class BooksController {

  /**
   * Display book listing page.
   *
   * @param inertia
   * @param response
   */
  public async index({inertia, response}: HttpContext) {

    // Service/Repository Class Skipped
    // Todo: Refactor below code to BookService / BookRepository class
    try {
      const books = await Book.query()
        // @ts-ignore
        .preload('reviews', (query) => {

          // @ts-ignore
          query.preload('user')
        }).orderBy('created_at', 'desc');

      return inertia.render('book', {books: books})
    } catch (e) {

      // Logging Skipped
      // Todo: Include logging detailing the error

      return response.status(500).send({error: 'Error listing books.'})
    }

  }

  /**
   * Display Book Creation Page
   *
   * @param inertia
   */
  public async create({inertia}: HttpContext) {
    return inertia.render('book_form')
  }

  /**
   * Store a book.
   *
   * @param request
   * @param inertia
   * @param response
   */
  public async store({request, response}: HttpContext) {

    // Validation Skipped
    // Todo: Add server side validation for title, author
    //  Ensure title value exists, is string, min/max lengths etc.
    //  Ensure author value exists, is string, min/max lengths etc.
    //  Ensure author value exists, is number, min/max years etc.

    const data = request.only(['title', 'author'])

    try {

      // Service/Repository Class Skipped
      // Todo: Refactor below code to BookService / BookRepository class
      await Book.create(
        {title: data.title, author: data.author}
      )

      return response.redirect().toRoute('book.index');
    } catch (e) {

      // Logging Skipped
      // Todo: Include logging detailing the error
      return response.status(500).send({error: 'Error storing book.'})
    }
  }
}

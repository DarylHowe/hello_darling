import type {HttpContext} from '@adonisjs/core/http'
import type {NextFn} from '@adonisjs/core/types/http'

// Models
import Review from "#models/review";

export default class CanLeaveReviewMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {

    const userId = ctx.auth.user?.id
    const bookId = ctx.params.id

    // Service Class Skipped
    // Todo: Refactor below code to ReviewService class so it can be re-usable / tested easier

    // Fail/abort if user has already left a review for this book
    const userReviewIsExisting = await Review.query()
      // @ts-ignore
      .where('user_id', userId)
      .where('book_id', bookId)
      .first()

    if (userReviewIsExisting) {
      ctx.session.flash('error', 'You have already left a review for this book.')
      return ctx.response.redirect().back();
    }

    return await next()
  }
}

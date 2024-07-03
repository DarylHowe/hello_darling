import vine from '@vinejs/vine'

/**
 * Validates the review's creation action
 */
export const createReviewValidator = vine.compile(
  vine.object({
    // Todo: Add validation here to ensure book_id exists
    //  Make all required
    //  Make comment not empty
    book_id: vine.number(),
    rating: vine.number().min(1).max(5),
    comment: vine.string().trim().escape(),
  })
)

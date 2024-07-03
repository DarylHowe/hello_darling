import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Book from '#models/book'
import User from '#models/user'
import Review from '#models/review'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    await User.createMany([
      {
        fullName: 'Test User 1',
        email: 'test_user_1@test.com',
        password: 'password',
      },
      {
        fullName: 'Test User 2',
        email: 'test_user_2@test.com',
        password: 'password',
      },
    ])

    await Book.createMany([
      { title: 'Book 1', author: 'Author 1' },
      { title: 'Book 2', author: 'Author 2' },
      { title: 'Book 3', author: 'Author 3' },
      { title: 'Book 4', author: 'Author 4' },
      { title: 'Book 5', author: 'Author 5' },
    ])

    await Review.createMany([
      { book_id: 1, user_id: 1, rating: 4, comment: 'Great book' },
      { book_id: 2, user_id: 1, rating: 5, comment: 'Amazing book' },
      { book_id: 3, user_id: 1, rating: 3, comment: 'Good book' },
      { book_id: 4, user_id: 1, rating: 4, comment: 'Interesting book' },
      { book_id: 5, user_id: 1, rating: 5, comment: 'Excellent book' },
    ])
  }
}

/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

// Controllers
import AuthController from '../app/controllers/auth_controller.js'
import BooksController from '#controllers/books_controller'
import ReviewsController from '#controllers/reviews_controller'

// ---------------------------------------------------------------
// Auth Routes
// ---------------------------------------------------------------
router.get('/register', [AuthController, 'registerPage']).as('auth.page.register')
router.get('/login', [AuthController, 'loginPage']).as('auth.page.login')

router.post('/login', [AuthController, 'login']).as('auth.login')
router.post('/register', [AuthController, 'register']).as('auth.register')
router
  .post('logout', async ({ auth, response }) => {
    await auth.use('web').logout()
    return response.redirect('/login')
  })
  .use(middleware.auth())

// ---------------------------------------------------------------
// Application Routes
// ---------------------------------------------------------------
router
  .group(() => {
    // Auth
    router.get('/logout', [AuthController, 'logoutPage']).as('auth.page.logout')

    // Books routes
    router.get('/books', [BooksController, 'index']).as('book.index')
    router.get('/book/create', [BooksController, 'create']).as('book.create')
    router.post('/book', [BooksController, 'store']).as('book.store')

    // Review routes
    router
      .get('book/:id/review/create', [ReviewsController, 'create'])
      .as('review.create')
      .use(middleware.canLeaveReview())
    router.post('/review', [ReviewsController, 'store']).as('review.store')
  })
  .use(middleware.auth())

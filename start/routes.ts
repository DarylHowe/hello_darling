/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import {middleware} from "#start/kernel";

// Controllers
import AuthController from '../app/controllers/auth_controller.js'
import {request} from "node:http";

router.get('/register', [AuthController, 'registerPage']).as('auth.page.register')
router.get('/login', [AuthController, 'loginPage']).as('auth.page.login')
router.get('/logout', [AuthController, 'logoutPage']).as('auth.page.logout')

router.post('/login', [AuthController, 'login']).as('auth.login')
router.post('/register', [AuthController, 'register']).as('auth.register')
router.post('logout', async ({ auth, response }) => {
    await auth.use('web').logout()
    return response.redirect('/login')
  }).use(middleware.auth())


router.get('/dashboard', [AuthController, 'dashboardPage']).as('auth.page.dashboard')
  .use(middleware.auth())


/*
router.on('/dashboard').renderInertia('home', { version: 6 }) .use(middleware.auth({
  guards: ['web']
}))

router.get('/dashboard', async ({ auth }) => {
    const user = auth.getUserOrFail()
    await user.getAllMetrics()
  }).use(middleware.auth())
 */


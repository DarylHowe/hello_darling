import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

;('use strict')


export default class AuthController {
  /**
   * Show Register Page
   *
   * @param inertia
   */
  public async registerPage({ inertia }: HttpContext) {
    return inertia.render('register', {})
  }

  /**
   * Show Login Page
   *
   * @param inertia
   */
  public async loginPage({ inertia }: HttpContext) {
    return inertia.render('login', {})
  }

  /**
   * Show Logout Page
   *
   * @param inertia
   */
  public async logoutPage({ inertia }: HttpContext) {
    return inertia.render('logout', {})
  }

  public async dashboardPage({ auth, inertia }: HttpContext) {

    const user = auth.getUserOrFail()
    console.log('user', user);

    return inertia.render('home', {user: user})
  }

  public async register({ auth, request, response }: HttpContext) {

    console.log('register')

    try {
      const { email, password } = request.all();
      const fullName = 'Test User';

      // Create user
      const user = await User.create({
        email,
        password,
        fullName
      });

      // Login user
      await auth.use('web').login(user);

      // Send them to a protected route
      return response.redirect('/dashboard');
    } catch (error) {
      console.error(error)
      return response.status(500).send({ error: 'Registration failed' })
    }
  }

  public async login({ auth, request, response }: HttpContext) {
    console.log('login')
    const { email, password } = request.only(['email', 'password'])

    // Verify
    const user = await User.verifyCredentials(email, password)
    if (!user) {
      return response.status(401).send({ error: 'Invalid credentials' });
    }

    // Login
    await auth.use('web').login(user)

    // Direct
    response.redirect('/dashboard')
  }
}

// module.exports = AuthController;

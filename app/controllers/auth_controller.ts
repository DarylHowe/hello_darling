import type {HttpContext} from '@adonisjs/core/http'

// Models
import User from '#models/user'

export default class AuthController {

  /**
   * Display Register Page
   *
   * @param inertia
   */
  public async registerPage({inertia}: HttpContext) {
    return inertia.render('register', {})
  }

  /**
   * Display Login Page
   *
   * @param inertia
   */
  public async loginPage({inertia}: HttpContext) {
    return inertia.render('login', {})
  }

  /**
   * Display Logout Page
   *
   * @param inertia
   */
  public async logoutPage({inertia}: HttpContext) {
    return inertia.render('logout', {})
  }

  /**
   * Register a new user.
   *
   * @param auth
   * @param request
   * @param response
   */
  public async register({auth, request, response}: HttpContext) {

    // Validation Skipped
    // Todo: Add server side validation for email, password.
    //  Ensure email value exists, unique, is valid email.
    //  Ensure password meets and security requirements such as let, special characters etc

    try {
      const {email, password} = request.all();

      // Service Class Skipped
      // Todo: Refactor below code to AuthService class
      //  Keep controller clean of any business logic
      //  Service method for me can be more easily testable/re-used
      const fullName = this.generateRandomName();
      const user = await User.create({
        email,
        password,
        fullName
      });
      await auth.use('web').login(user);


      return response.redirect('/books');
    } catch (error) {

      // Logging Skipped
      // Todo: Include logging detailing the error

      return response.status(500).send({error: 'Registration failed'})
    }
  }

  /**
   * Attempts to login user.
   *
   * @param auth
   * @param request
   * @param response
   */
  public async login({auth, request, response}: HttpContext) {

    // Validation Skipped
    // Todo: Add server side validation for email, password.
    //  Ensure email value exists.
    //  Ensure password value exists.

    try {
      const {email, password} = request.only(['email', 'password'])

      // Service Class Skipped
      // Todo: Refactor below code to AuthService class
      //  Keep controller clean of any business logic
      //  Service method for me can be more easily testable/re-used

      const user = await User.verifyCredentials(email, password)
      if (!user) {
        // Logging Skipped
        // Todo: Consider logging the attempted login - may need better solution than simply logging.
        //  Would need to be careful about this also in case of attack
        return response.status(401).send({error: 'Invalid credentials'});
      }

      await auth.use('web').login(user)

      response.redirect('/books')
    } catch (e) {

      // Logging Skipped
      // Todo: Include logging info message detailing the error
      return response.status(500).send({error: 'Registration failed'})
    }

  }

  /**
   * Generates a full name randomly from a list of 10 names.
   *
   * Todo: Move out to a service class
   *
   * @private
   */
  private generateRandomName() {
    const names = [
      'Alice Johnson',
      'Bob Smith',
      'Charlie Brown',
      'Diana Parker',
      'Edward Lee',
      'Fiona Adams',
      'George Wilson',
      'Hannah Taylor',
      'Ian Clark',
      'Julia Roberts'
    ];

    // Generate a random index to pick a name
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };
}

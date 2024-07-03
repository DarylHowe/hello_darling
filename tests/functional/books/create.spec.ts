import { test } from '@japa/runner'

test.group('Test Book Store', () => {

  test('example test', async ({assert}) => {
    assert.isTrue(true)
  })

  test('store books', async ({client}) => {

    const bookData = {
      title: 'Test Book',
      author: 'Test Author',
    };

    /*
    const user = {
      fullName: 'Test User 1',
      email: 'test_user_0sss@test.com',
      password: 'password',
    };

    // Create a test user
    const userO = await User.create(user);
    */

    // Make HTTP request to store a book
    await client
      .post('/book')
      .form(bookData);

    // Assert response is 200 / is a redirect to book.index route
    // Asset book is in DB
  })

})

import { useState } from 'react'
import { Head, router } from '@inertiajs/react'
import '../css/Register.css'
import Layout from '~/components/layout' // Import your CSS file for styling

const Register = () => {
  const [formData, setFormData] = useState({
    email: 'test@123.com',
    password: 'password',
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    console.log('handleSubmit')
    e.preventDefault()
    router.post('/register', formData)
  }

  return (
    <Layout>
      <div className="register-container">
        <Head title="Register" />
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </Layout>
  )
}

export default Register

import { useState } from 'react'
import { Head, router } from '@inertiajs/react'

import '../css/Login.css'
import Layout from "~/components/layout";

const Login = () => {
  const [formData, setFormData] = useState({
    email: 'test_user_1@test.com',
    password: 'password',
  })

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    console.log('handleSubmit')
    e.preventDefault()
    router.post('/login', formData)
  }

  return (
    <Layout>
      <div className="login-container">
        <Head title="Login"/>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  )
}

export default Login

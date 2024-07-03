import { useState } from 'react'
import { Head, router } from '@inertiajs/react'
import Layout from '~/components/layout'
import '../css/book.css'

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    router.post('/book', formData)
  }

  return (
    <Layout>
      <div className="book-form-container">
        <Head title="Add New Book" />
        <h1>Add New Book</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            required
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </Layout>
  )
}

export default BookForm

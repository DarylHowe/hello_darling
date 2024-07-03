import React, {useState} from 'react';
import {Head, router} from '@inertiajs/react';
import Layout from '~/components/layout';
import '../css/book.css';

interface Book {
  id: number;
  title: string;
  author: string;
}

interface ReviewFormProps {
  book: Book;
  error: string | undefined; // Define the error message type
}

const ReviewForm: React.FC<ReviewFormProps> = ({book, error}) => {
  const [formData, setFormData] = useState({
    rating: '',
    comment: '',
    book_id: book.id,
  });

  const [ratingError, setRatingError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side validation
    // @ts-ignore
    if (formData.rating < 1 || formData.rating > 5) {
      setRatingError('Rating must be between 1 and 5.');
      return;
    }

    // Clear any previous error message
    setRatingError(null);

    // Post data to server-side endpoint
    try {
      await router.post('/review', formData);
      // Optionally redirect or show success message
    } catch (error) {
      // Handle error
      console.error('Error submitting review:', error);
    }
  };

  return (
    <Layout>
      <div className="book-form-container">
        <Head title="Review"/>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <br/>
        <br></br>
        <h1>Create A Review</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Comment"
            required
          />
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rating"
            required
          />
          {ratingError && <p className="error-message">{ratingError}</p>}
          {error &&
            <div>
              <p className="error-message">Error From The Server!!!</p>
              <p className="error-message">{error}</p>
              <br></br>
            </div>
          }
          <input type="hidden" name="book_id" value={formData.book_id}/>
          <button type="submit">Add Review</button>
        </form>
      </div>
    </Layout>
  );
};

export default ReviewForm;

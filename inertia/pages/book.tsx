import {Head, Link} from '@inertiajs/react';
import Layout from '~/components/layout';
import '../css/book.css';

interface User {
  fullName: string;
}

interface Review {
  id: number;
  reviewer_name: string,
  comment: string;
  createdAt: string;
  user: User;
}

interface Book {
  id: number;
  title: string;
  author: string;
  reviews: Review[];
}

interface BookProps {
  books: Book[];
}

export default function Book({ books }: BookProps) {
  return (
    <>
      <Head title="Books" />
      <Layout>
        <div className="book-container">
          <h1>Books</h1>
          <Link href="/book/create">Create Book</Link>
          <br></br>
          <br></br>
          <ul className="book-list">
            {books.map((book) => {
              return (
                <li key={book.id} className="book-item">
                  <h2>{book.title}</h2>
                  <p>{book.author}</p>
                  <br></br>
                  <br></br>
                  <h3>Reviews ({book.reviews.length}) - <Link href={`book/${book.id}/review/create`}>Create Review</Link></h3>
                  <br></br>
                  <ul className="review-list">
                    {book.reviews.map((review) => (
                      <li key={review.id} className="review-item">
                        <p>Reviewer: {review.user.fullName}</p>
                        <p>Review: "{review.comment}"</p>
                        <p>Reviewed at: {review.createdAt}</p>
                        <p>Reviewed by: {review.reviewer_name}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    </>
  )
}

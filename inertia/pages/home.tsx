import { Head } from '@inertiajs/react';
import Layout from '~/components/layout';
import '../css/Home.css';

export default function Home(props: { version: number, user: { fullName: string, email: string } }) {
  return (
    <>
      <Head title="Homepage" />
      <Layout>
        <div className="home-container">
          <h1>User Info</h1>
          <div className="user-info">
            <p><strong>Full Name:</strong> {props.user.fullName}</p>
            <p><strong>Email:</strong> {props.user.email}</p>
          </div>
        </div>
      </Layout>
    </>
  );
}

import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div className="container mt-5">

      <div className="text-center">

        <h1>NSS Volunteer Management System</h1>

        <p className="mt-3">
          Register NSS Volunteers and View Volunteer Details
        </p>

        <Link
          className="btn btn-success me-3"
          to="/add-volunteer"
        >
          Add Volunteer
        </Link>

        <Link
          className="btn btn-primary"
          to="/view-volunteer"
        >
          View Volunteers
        </Link>

      </div>

    </div>

  );
};

export default Home;
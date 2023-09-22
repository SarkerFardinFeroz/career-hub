import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white shadow-md p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-600 mb-4">
          The page you are looking for could not be found.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

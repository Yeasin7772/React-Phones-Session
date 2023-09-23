import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" h-screen flex justify-center items-center">
          <div>
          <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p> <br />
          <Link to={'/'}>
          <button className="btn bg-blue-500 py-4 px-4 rounded-lg">
                Back Home
            </button>
          </Link>
          </div>
        </div>
    );
};

export default ErrorPage;
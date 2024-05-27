import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h1> 404 Error Not Found</h1>
      <Link to="/home">Go to Home</Link>
    </>
  );
}
export default ErrorPage;

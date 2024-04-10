import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>{err.error.message}</h1>
      <h2>This is custom error page</h2>
      <Link to="/Login">Login Page</Link>
    </div>
  );
};

export default Error;

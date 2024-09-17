import Error from '../components/ErrorPage/Error';

/**
 * This component renders a page with an error message, 
 * in case the user has entered an invalid URL.
 * 
 * @returns {JSX.Element} - A JSX element representing the error page.
 */
const ErrorPage = () => {
  return (
    <div>
      <Error />
    </div>
  );
};

export default ErrorPage;

import styles from './Error.module.scss';
import { Link } from 'react-router-dom';

/**
 * This component renders an error message with a link to redirect the user to the homepage,
 * in case the user has entered an invalid URL.
 * 
 * @returns {JSX.Element} - A JSX element representing the error page.
 */
const Error = () => {
    return (
        <main className={styles.errorPage}>
            <h1 className={styles.title} >404</h1>
            <p className={styles.text}>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className={styles.link}>Retourner sur la page d’accueil</Link>
        </main>
    );
};

export default Error;
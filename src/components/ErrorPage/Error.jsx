import styles from './Error.module.scss';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <main className={styles.errorPage}>
            <h1 className={styles.errorTitle} >404</h1>
            <p className={styles.errorText}>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className={styles.errorLink}>Retourner sur la page d’accueil</Link>
        </main>
    );
};

export default Error;
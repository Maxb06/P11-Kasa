import styles from './Error.module.scss';
import { Link } from 'react-router-dom';

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
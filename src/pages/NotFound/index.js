import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import styles from './NotFound.module.css';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <span className={styles.text}>
                404
            </span>
            <h1 className={styles.title}>
                Woops! Page Not Found.
            </h1>
            <p className={styles.description}>
                We do not find anything here! Please try again later.
            </p>
            <div className={styles.bottom}>
                <div 
                    className={styles.button}
                    onClick={() => navigate(-1)}
                >
                    <Button className={styles.button}>Back</Button>
                </div>
                <img src="/images/erro_404.png" alt="404" />
            </div> 
        </div>
    );
}
import { Link } from 'react-router-dom'
import styles from './Post.module.css'

export default function PostCard({post}) {
    return (
        <Link className={styles.link} to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img 
                    className={styles.background} 
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Post background" 
                />
                <h2 className={styles.title}>{post.title}</h2>
                <button className={styles.buttonRead}>Read</button>
            </div>
        </Link>
    )
}
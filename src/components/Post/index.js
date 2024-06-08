import styles from './Post.module.css'

export default function Post({post}) {
    return (
        <div className={styles.post}>
            <img 
                className={styles.background} 
                src="/images/background.png"
                alt="Post background" 
            />
            <h2 className={styles.title}>{post.title}</h2>
            <button className={styles.buttonRead}>Read</button>
        </div>
    )
}
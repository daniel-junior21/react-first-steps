import styles from "./Blog.module.css";
import posts from '../../assets/posts.json';
import Post from "../../components/Post";

const Blog = () => {
    return (
        <main>
            <div className={styles.banner}>
                <div className={styles.presentation}>
                    <h1 className={styles.title}>
                        Hello! Welcome to our Blog.
                    </h1>
                </div>
                <div className={styles.images}>
                    <img className={styles.circle} src="/images/circle.png" alt="circle" aria-hidden={true} />
                </div>
            </div>

            <ul className={styles.posts}>
                {posts.map(post => 
                    <li>
                        <Post post={post} />
                    </li>
                )}
            </ul>
        </main>
    )
}

export default Blog;
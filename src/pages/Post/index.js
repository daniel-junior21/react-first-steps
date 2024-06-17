import './Post.css'
import { useParams } from "react-router-dom";
import posts from "../../assets/posts.json";
import Markdown from "react-markdown";

export default function Post() {
    const params = useParams();

    const post = posts.find((post) => {
        return post.id === parseInt(params.id);
    });

    if(!post) {
        return 
    }

    return (
        <main>
            <h1 className="title">
                {post.title}
            </h1>
            <div className="post-markdown-container">
                <Markdown>
                    {post.body}
                </Markdown>
            </div>
        </main>
    );
}
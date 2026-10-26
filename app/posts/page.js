import PostCard from "@/components/PostCard";
import styles from "./page.module.css";

async function getPosts(wordpressUrl) {
  "use cache";
  const response = await fetch(`${wordpressUrl}/wp-json/wp/v2/posts`);
  return response.json();
}

export default async function PostsPage() {
  const posts = await getPosts(process.env.WORDPRESS_URL);
  return (
    <main>
      <h1>Posts</h1>
      {posts.length === 0 ? (
        <p>There are no posts yet.</p>
      ) : (
        <section className={styles.grid}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      )}
    </main>
  );
}

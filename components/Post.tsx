interface PostProps {
  post: {
    title: string;
    body: string;
  };
}

const Post = ({ post }: PostProps) => {
  return (
    <div>
      <h1>Title{post.title}</h1>
      <hr />
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

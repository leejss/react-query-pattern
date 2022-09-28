import { useRouter } from "next/router";
import Post from "../../components/post/Post";
import { usePostByIdQuery } from "../../components/post/postQuery";

const PostPage = () => {
  const router = useRouter();
  const postQuery = usePostByIdQuery(router.query.id as string);
  if (postQuery.isError) {
    return <h1>Error come</h1>;
  }

  if (postQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Post
        post={{
          body: postQuery.data.body,
          title: postQuery.data.title,
        }}
      />
    </div>
  );
};

export default PostPage;

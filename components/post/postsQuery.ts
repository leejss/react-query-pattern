import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async (page: number = 1) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
      params: {
        _page: page,
      },
    }
  );
  return data;
};

export const usePostsQuery = (page: number = 1) => {
  const postsQuery = useQuery(["posts", page], () => fetchPosts(page), {
    keepPreviousData: true,
  });
  return postsQuery;
};

// keepPreviousData ->

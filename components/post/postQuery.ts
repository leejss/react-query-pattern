import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchPost = async (id: string = "1") => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

export const usePostByIdQuery = (id: string = "1") => {
  const postQuery = useQuery(["post", id], () => fetchPost(id));
  return postQuery;
};

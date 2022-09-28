import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const postWord = async (word: string) => {
  return axios.post("/api/word", {
    text: word,
  });
};

export const useAddWordMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((word: string) => postWord(word), {
    onSuccess: async (arg) => {
      // 1. Invalidate query. much safter ?
      // await queryClient.invalidateQueries(["words"]);
      const words = queryClient.getQueryData(["words"]) as any;
      // 2. setQueryData directly
      queryClient.setQueryData(["words"], words.concat(arg.data));
    },
  });
};

export const fetchWords = async () => {
  const { data } = await axios.get("/api/word");
  return data;
};

export const useWordsQuery = () => {
  const wordQuery = useQuery(["words"], fetchWords);
  return wordQuery;
};

// invalidateQueries

// Direct updates

// What mutation retruns?

// What happens when call invalidateQueries ? => background refetching.

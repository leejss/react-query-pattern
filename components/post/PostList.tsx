import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { fetchPost } from "./postQuery";
import { usePostsQuery } from "./postsQuery";

const PostList = () => {
  const [page, setPage] = useState(1);
  const postQuery = usePostsQuery(page);
  const queryClient = useQueryClient();

  return (
    <div>
      <h1 className="text-6xl">Posts</h1>
      {postQuery.isLoading && <h2 className="text-5xl">Loading...</h2>}
      {postQuery.isSuccess && (
        <>
          <ol className="flex flex-col gap-4 list-decimal pl-10">
            {postQuery.data.map((d: any) => {
              return (
                <Link key={d.id} href={`/posts/${d.id}`}>
                  <li
                    className="text-2xl cursor-pointer hover:underline"
                    // Prefetching
                    onMouseEnter={async () => {
                      await queryClient.prefetchQuery(
                        ["post", `${d.id}`],
                        () => {
                          return fetchPost(d.id);
                        },
                        {
                          staleTime: 3 * 1000,
                        }
                      );
                    }}
                  >
                    {d.title}
                  </li>
                </Link>
              );
            })}
          </ol>
        </>
      )}
      <div className="flex gap-2 items-center justify-center">
        <button
          disabled={page === 1}
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
        >
          ➖
        </button>
        <p className="text-3xl">{page}</p>
        <button
          disabled={page === 10}
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          ➕
        </button>
      </div>
    </div>
  );
};

export default PostList;

import { api } from "@/redux/api/appSlice";

const productAPI: any = api.injectEndpoints({
  endpoints: (builder) => ({
    // Create blog post
    createBlogPost: builder.mutation({
      query: (post) => ({
        url: "/article/a/create",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["blog"],
    }),
    // Create blog comment
    createBlogComment: builder.mutation({
      query: (post) => ({
        url: "/comment/c/create",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["blog"],
    }),
    // Read single blog post by ID
    getBlogPostById: builder.query({
      query: (id: string) => ({
        url: `/article/a/get/${id}`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    getBlogPostByUserId: builder.query({
      query: () => ({
        url: `/article/a/getByuser`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    // Read multiple blog posts
    getBlogPosts: builder.query({
      query: () => ({
        url: "/article/a/get",
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    // Read recent blogs
    getRecentBlog: builder.query({
      query: () => ({
        url: "/article/a/g/recent",
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    // Update blog post
    updateBlogPost: builder.mutation({
      query: (post) => ({
        url: `/article/a/update/${post.id}`,
        method: "PATCH",
        body: post,
      }),
      invalidatesTags: ["blog"],
    }),
    // Delete blog post
    deleteBlogPost: builder.mutation({
      query: (id: string) => ({
        url: `/article/a/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
    getCategories: builder.query({
      query: () => ({
        url: "/article/a/g/recent",
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    getTags: builder.query({
      query: () => ({
        url: "/article/a/g/recent",
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
  }),
});

export const {
  useCreateBlogPostMutation,
  useCreateBlogCommentMutation,
  useGetBlogPostByIdQuery,
  useGetBlogPostByUserIdQuery,
  useGetBlogPostsQuery,
  useGetRecentBlogQuery,
  useUpdateBlogPostMutation,
  useDeleteBlogPostMutation,
} = productAPI;

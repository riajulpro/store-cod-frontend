import { api } from "@/redux/api/appSlice";

const productAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    // Create blog post
    createProduct: builder.mutation({
      query: (post) => ({
        url: "/404",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useCreateProductMutation } = productAPI;

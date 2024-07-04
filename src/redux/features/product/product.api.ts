import { api } from "@/redux/api/appSlice";

const productAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ page, limit, sort, category, brand, minPrice, maxPrice }) => {
        const params = new URLSearchParams();
        if (page) params.append("page", page);
        if (limit) params.append("limit", limit);
        if (sort) params.append("sort", sort);
        if (category) params.append("category", category);
        if (brand) params.append("brand", brand);
        if (minPrice) params.append("minPrice", minPrice.toString());
        if (maxPrice) params.append("maxPrice", maxPrice.toString());

        return {
          url: `/product?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Product"],
    }),
    // Create blog post
    createProduct: builder.mutation({
      query: (post) => ({
        url: "/404",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery, // get all products (new)
  useCreateProductMutation,
} = productAPI;

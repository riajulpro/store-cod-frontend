import { api } from "@/redux/api/appSlice";

const categoryAPI: any = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => {
        return {
          url: `/category`,
          method: "GET",
        };
      },
      providesTags: ["Category"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
} = categoryAPI;

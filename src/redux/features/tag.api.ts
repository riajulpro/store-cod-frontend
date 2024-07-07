import { api } from "@/redux/api/appSlice";

const tagAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllTags: builder.query({
      query: () => {
        return {
          url: `/tag`,
          method: "GET",
        };
      },
      providesTags: ["Tag"],
    }),
  }),
});

export const { useGetAllTagsQuery } = tagAPI;

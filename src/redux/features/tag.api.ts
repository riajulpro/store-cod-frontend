import { api } from "@/redux/api/appSlice";

const tagAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllTags: builder.query({
      query: () => ({
        url: `/tag`,
        method: "GET",
      }),
      providesTags: ["Tag"],
    }),
    getTagById: builder.query({
      query: (id) => ({
        url: `/tag/${id}`,
        method: "GET",
      }),
      providesTags: ["Tag"],
    }),
    createTag: builder.mutation({
      query: (newTag) => ({
        url: "/tag",
        method: "POST",
        body: newTag,
      }),
      invalidatesTags: ["Tag"],
    }),
    updateTag: builder.mutation({
      query: (tag) => ({
        url: `/tag/${tag._id}`,
        method: "PATCH",
        body: tag,
      }),
      invalidatesTags: ["Tag"],
    }),
    deleteTag: builder.mutation({
      query: (id) => ({
        url: `/tag/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tag"],
    }),
  }),
});

export const {
  useGetAllTagsQuery,
  useGetTagByIdQuery,
  useCreateTagMutation,
  useUpdateTagMutation,
  useDeleteTagMutation,
} = tagAPI;

import { api } from "@/redux/api/appSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Create blog post
    registerUser: builder.mutation({
      query: (post) => ({
        url: "/auth/register/customer",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
export const { useRegisterUserMutation } = userApi;

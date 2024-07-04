import { api } from "@/redux/api/appSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Create blog post
    registerCustomer: builder.mutation({
      query: (post) => ({
        url: "/auth/register/customer",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation({
      query: (post: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
export const { useRegisterCustomerMutation, useLoginUserMutation } = userApi;

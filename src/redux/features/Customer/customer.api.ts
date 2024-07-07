import { api } from "@/redux/api/appSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Create blog post
    updateCustomerDetails: builder.mutation({
      query: (customerPayload) => ({
        url: "/customer/update",
        method: "PUT",
        body: customerPayload,
      }),
      invalidatesTags: ["user", "customer"],
    }),
  }),
});
export const { useUpdateCustomerDetailsMutation } = userApi;

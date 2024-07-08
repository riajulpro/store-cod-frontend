import { api } from "@/redux/api/appSlice";

const brandAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrands: builder.query({
      query: () => {
        return {
          url: `/brand`,
          method: "GET",
        };
      },
      providesTags: ["Brand"],
    }),
    getBrandById: builder.query({
      query: (id) => {
        return {
          url: `/brand/${id}`,
          method: "GET",
        };
      },
      providesTags: ['Brand'],
    }),
    createBrand: builder.mutation({
      query: (newBrand) => ({
        url: '/brand',
        method: 'POST',
        body: newBrand,
      }),
      invalidatesTags: ['Brand'],
    }),
    updateBrand: builder.mutation({
      query: (brand) => ({
        url: `/brand/${brand?._id}`,
        method: 'PATCH',
        body: brand,
      }),
      invalidatesTags:['Brand'],
    }),
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `/brand/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Brand'],
    }),
  }),
});

export const {
  useGetAllBrandsQuery,
  useGetBrandByIdQuery,
  useCreateBrandMutation,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
} = brandAPI;

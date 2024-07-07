import { api } from "@/redux/api/appSlice";
import { ISell } from "@/types/sell";

const sellAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSells: builder.query<
      {
        data: any;
        sales: ISell[];
        total: number;
      },
      { page: number; limit: number }
    >({
      query: ({ page, limit }) => `sell?page=${page}&limit=${limit}`,
      providesTags: ["Sell"],
    }),
    getUserOrderHistroy: builder.query({
      query: ({ page = 1 }: { page?: number }) =>
        `/sell/my/orders?page=${page}&limit=${10}`,
      providesTags: ["Sell"],
    }),
  }),
});

export const { useGetAllSellsQuery, useGetUserOrderHistroyQuery } = sellAPI;

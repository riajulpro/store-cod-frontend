import { api } from "@/redux/api/appSlice";
import { ISell } from "@/types/sell";

const sellAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSells: builder.query<
      {
        data: any; sales: ISell[]; total: number 
},
      { page: number; limit: number }
    >({
      query: ({ page, limit }) => `sell?page=${page}&limit=${limit}`,
      providesTags: ["Sell"],
    }),
  }),
});

export const { useGetAllSellsQuery } = sellAPI;

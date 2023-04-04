import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from '../../const/const';

import { IFlat } from '../../APP/types/types';


export const sectionApi = createApi({
  reducerPath: 'sectionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
  }),
  endpoints: (build) => ({
    getFlats: build.query<IFlat[], void>({
      query: () => 'flats'
    }),
    getOneFlat: build.query({
      query: (id: string) => ({
        url: `/flat/${id}`,
      }),
    }),
  }),
});

export const { useGetFlatsQuery, useGetOneFlatQuery } = sectionApi;

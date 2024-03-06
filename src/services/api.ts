import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {RootState} from '../store/store';

// interface UserSliceState {
//   token: string | null;
// }

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://e2b1-112-196-113-2.ngrok-free.app/',
  //   prepareHeaders: (headers: Headers, {getState}) => {
  // const state: RootState = getState();
  // const userSlice = state.userSlice as UserSliceState;
  // const {token} = userSlice;
  // if (token) {
  //   headers.append('authorization', token);
  // }
  // return headers;
  //   },
});

const baseQueryWithInterceptor = async (
  args: any,
  api: any,
  extraOptions: any,
) => {
  let result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});

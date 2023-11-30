import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getBearerToken = () => {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjc2M2ZjYTY1MWJjNTk4Mzc3MTFkMCIsImlhdCI6MTY5NDI0OTgzMSwiZXhwIjoxNjk0ODU0NjMxfQ.wx9GzfCsqwwdABj3d359D0Ag0aU8I4eroBE3q_vwN3k";
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://employeeleave.devsujon.com/api/v1/LeaveType",
    prepareHeaders: (headers) => {
      const token = getBearerToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  // tagTypes: [ 'LeaveTypeList' ],
  endpoints: (builder) => ({
    GetLeave: builder.query({
      query: () => ({
        url: "/LeaveTypeList/1/500/0",
        method: "GET",
      }),
      // providesTags: [ 'LeaveTypeList' ]
    }),
    // RemoveLeaveType: builder.mutation({
    //   query: (id) => ({
    //     url: `/LeaveTypeDelete/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["LeaveTypeList"],
    // }),
    AddLeave: builder.mutation({
      query: (data) => ({
        url: "/LeaveTypeCreate",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data: addData } = await queryFulfilled;
          //  console.log(addData)
          dispatch(
            apiSlice.util.updateQueryData("GetLeave", undefined, (draft) => {
              draft?.push(addData);
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // editLeave: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/LeaveTypeUpdate/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: ["LeaveTypeList"],
    // }),
  }),
});

export const {
  useGetLeaveQuery,
  useAddLeaveMutation,
  //   useRemoveLeaveTypeMutation,
  //   useEditLeaveMutation,
} = apiSlice;

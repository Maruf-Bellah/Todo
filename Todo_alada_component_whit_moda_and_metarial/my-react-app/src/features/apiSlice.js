import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getBearerToken = () => {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTY2ZTY0OGE4ZDQ1Y2U4Y2YzZjBmNjkiLCJtZXJjaGFudCI6IjY1NjZlNjQ4YThkNDVjZThjZjNmMGY2NyIsImlhdCI6MTcwMTM1MTQyMCwiZXhwIjoxNzAxMzU1MDIwLCJ0eXBlIjoiQUNDRVNTIn0.-qZ_7f-hq1GIy7PKEFIMGImsURaSTIDUy2WCAYoQxxg";
};
const store = "6566e648a8d45ce8cf3f0f6b";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://20.212.156.134:5050/api/v2",
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
      query: (store) => ({
        url: `/incomes-expenses/sections/${store}?type=EXPENSE`,
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
      query: (postBody) => ({
        url: "/incomes-expenses/sections",
        method: "POST",
        body: postBody,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(
            apiSlice.util.updateQueryData("GetLeave", data.store, (draft) => {
              return draft?.push(data.data);
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    updateLeave: builder.mutation({
      query: (updateBody) => ({
        url: `/incomes-expenses/sections/${updateBody._id}`,
        method: "PATCH",
        body: updateBody,
      }),
    }),
  }),
});

export const {
  useGetLeaveQuery,
  useAddLeaveMutation,
  //   useRemoveLeaveTypeMutation,
  //   useEditLeaveMutation,
  useUpdateLeaveMutation,
} = apiSlice;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface UsersResponse {
	username: string
	firstName: string
	lastName: string
	email: string
}

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
	endpoints: builder => ({
		getUsers: builder.query<UsersResponse[], void>({
			query: () => "/users",
		}),
	}),
})

export const { useGetUsersQuery } = api

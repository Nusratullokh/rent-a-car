


import { api } from "./index";
import { FetchCar } from "../../types/dataTypes";
import { FetchCarSingle } from "../../types/dataTypes";

const carApi  = api.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query<FetchCar[], void>({
            query: () => ({
                url: "/cars"
            }),
            providesTags: ["CARS"]
        }),
        getCarById: build.query<FetchCarSingle, string>({
            query: (_id) => ({
                url: `/cars/${_id}`
            }),
            providesTags: (result, error, _id) => [{ type: "CARS", id: _id }]
        })
    })
});

export const { useGetCarsQuery, useGetCarByIdQuery } = carApi;

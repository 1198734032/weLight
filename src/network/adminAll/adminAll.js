import { request } from "@/network/request.js"

export function delMovie(movieId) {
    return request({
        method: "get",
        url: "/delete",
        params:{
            movieId
        }
    }) 
}
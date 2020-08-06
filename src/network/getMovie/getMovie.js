import { request } from "@/network/request.js"

export function getMovie() {
    return request({
        method: "get",
        url: "/movies"
    })
} 
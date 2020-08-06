import { request } from "@/network/request.js"

export function userLogin(data) {
    return request({
        method: "post",
        url: "/login",
        data: data
    })
}
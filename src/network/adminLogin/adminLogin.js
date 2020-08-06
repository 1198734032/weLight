import { request } from "@/network/request.js"

export function adminLogin(data) {
    return request({
        method: "post",
        url: "/adlogin",
        data: data
    })
} 
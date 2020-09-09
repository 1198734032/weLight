import { request } from "@/network/request.js"

export function getRoom() {
    return request({
        method: "get",
        url: "/rooms"
    })
}

export function createRoom(url, data) {
    return request({
        method: "post",
        url: `/${url}`,
        data: data
    })
}

export function enterPublic(id, password = "") {
    return request({
        method: "get",
        url: "/enterpublic",
        params: {
            roomId: id
        }
    })
}

export function enterprivate(id, password) {
    return request({
        method: "post",
        url: "/enterprivate",
        data: {
            roomId: id,
            password: password
        }
    })
}

export function deleteRoom(roomId) {
    return request({
        method: 'get',
        url: '/deleteRoom',
        params: {
            roomId
        }
    })
}

export function getInformation(){
    return request({
        method:'get',
        url:'/editor',
        params:{
            userId:sessionStorage.getItem('userId')
        }
    })
}

export function changeInformation(data){
    return request({
        method:'post',
        url:'/editing',
        data:data
    })
}
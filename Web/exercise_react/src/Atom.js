import { atom } from "recoil";

export const userInfo = atom({
    key: 'userInfo',
    default: {
        email: "oksk6681@naver.com",
        password: "123123",
        nickname: "김광일",
        homepage: "",
        gender: 0,
        date: "",
        profileImage: "",
        introduce: ""
    }
})
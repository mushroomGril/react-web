import {post} from '../utils/request'

export function getCode(data){
    return post('/api/getEmailCode',data)
}
export function checkCode(data){
    return post('/api/userLogin',data)
}
export function phoneCode(data){
    return post('/api/getPhoneCode',data)
}
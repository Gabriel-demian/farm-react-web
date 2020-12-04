import instance from '../Config/axios'

export function getFarms(){
    return instance.get("/farms")
}

export function createFarm(data){
    return instance.post("/farms",data)
}
import {promises as fsPromises} from 'fs'

export const getFAQ = async() =>{
    const path = 'data/cscenter_faq.json';
    const faq = fsPromises.readFile(path,"utf-8")
                .then((data)=>{
                    return JSON.parse(data)
                })
                .catch(error=>console.log(error))
    return faq
}

export const getNotice = async() =>{
    const path = 'data/notice.json';
    const notice = fsPromises.readFile(path,"utf-8")
                .then((data)=>{
                    return JSON.parse(data)
                })
                .catch(error=>console.log(error))
    return notice
}
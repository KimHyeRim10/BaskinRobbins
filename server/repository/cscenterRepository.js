import {promises as fePromises} from 'fs'

export const getPraise =() =>{
    const path = 'data/praise.json'
    const praise = fePromises
                        .readFile(path, 'utf-8')
                        .then((data)=>JSON.parse(data))
                        .catch(error=>console.log(error))
return praise
                    }
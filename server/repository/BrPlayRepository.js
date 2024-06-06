import {promises as fsPromises} from 'fs'

/* 이벤트 목록 출력 */
export const getEvent = async() =>{
    const path = 'data/promotionList.json';
    const event = fsPromises.readFile(path,"utf-8")
                .then((data)=>{
                    return JSON.parse(data)
                })
                .catch(error=>console.log(error))
    return event
}
/* 이벤트 상세 페이지 출력 */

/* 레시피 목록 출력 */
export const getRecipe = async() =>{
    const path = 'data/brrecipe.json';
    const recipe = fsPromises.readFile(path,"utf-8")
                .then((data)=>{
                    return JSON.parse(data)
                })
                .catch(error=>console.log(error))
    return recipe
}

/* 레시피 상세페이지 출력 */
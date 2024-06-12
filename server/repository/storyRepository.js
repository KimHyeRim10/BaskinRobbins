import {promises as fePromises} from 'fs'

export const getHistory =() =>{
    const path ='data/history.json'
    const historyImg = fePromises
                .readFile(path, 'utf-8')
                .then((data)=>JSON.parse(data))
                .catch(error=>console.log(error))
    return historyImg
}

export const getStory =() =>{
    const path = 'data/story.json'
    const storyContent = fePromises
                            .readFile(path, 'utf-8')
                            .then((data)=>JSON.parse(data))
                            .catch(error=>console.log(error))
    return storyContent 
}

export const getBebetter=()=>{
    const path = 'data/bebetter.json'
    const modalContent = fePromises
                                    .readFile(path, 'utf-8')
                                    .then((data)=>JSON.parse(data))
                                    .catch(error=>console.log(error))
    return modalContent
                                }
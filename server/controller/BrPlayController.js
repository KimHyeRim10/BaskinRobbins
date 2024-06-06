import * as repository from '../repository/BrPlayRepository.js'

export const getEvent = async(req,res)=>{
    const event = await repository.getEvent()
    res.json(event);
    res.end()
}

export const getRecipe = async(req,res)=>{
    const recipe = await repository.getRecipe()
    res.json(recipe)
}
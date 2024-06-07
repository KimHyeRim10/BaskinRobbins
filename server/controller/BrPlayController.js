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

export const getRecipeDetail = async(req,res)=>{
    const id = req.params.id
    const recipe = await repository.getRecipeDetail(id)
    res.json(recipe)
}
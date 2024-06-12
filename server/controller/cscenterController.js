import * as repository from '../repository/cscenterRepository.js'

export const getPraise = async(req,res) =>{
const praise= await repository.getPraise()
    res.json(praise)
    res.end()

}
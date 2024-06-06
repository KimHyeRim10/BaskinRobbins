import * as repository from '../repository/CSCenterRepository.js'

export const getFAQ = async (req,res) => {
    const faq = await repository.getFAQ()
    res.json(faq);
    res.end()
}

export const getNotice = async(req,res)=>{
    const notice = await repository.getNotice()
    res.json(notice)
}
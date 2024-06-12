import * as repository from '../repository/CSCenterRepository_ysw.js'

export const getFAQ = async (req,res) => {
    const faq = await repository.getFAQ()
    res.json(faq);
    res.end()
}

export const getNotice = async(req,res)=>{
    const notice = await repository.getNotice()
    res.json(notice)
}
export const getNoticeDetail = async(req,res)=>{
    const id = req.params.id
    const noticedetail = await repository.getNoticeDetail(id)
    res.json(noticedetail)
}
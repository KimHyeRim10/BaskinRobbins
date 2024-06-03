import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/cscenter/cscenter.css'
import { NoticeDetailContent } from '../components/CScenterComponents'
import { Navigate } from 'react-router-dom'

export default function NoticeDetail(){
    const navigator = Navigate
    return(
        <div id="noticedetail">
            <div className="content">
                <h2 className='noticedetailtitle'>공지사항</h2>
                <NoticeDetailContent/>
                <button className='backbtndetail' onClick={navigator('/')}>목록</button>
            </div>
        </div>
    )
};
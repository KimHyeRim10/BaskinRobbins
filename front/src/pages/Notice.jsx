import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/cscenter/cscenter.css'
import { Navbar } from '../components/MainComponents'
import { BigTitleNInfo } from '../components/MainComponents'
import { NoticeList } from '../components/CScenterComponents'

export default function Notice(){
    const cscenter = [
        {title:"고객센터",path:"/cscenter"},
        {title:"소비자중심경영(CCM)" ,path:"/cscenter/ccm"},
        {title:"칭찬첨포", path:"/cscenter/praise"},
        {title:"공지사항", path:"/cscenter/notice"},
    ]
    return(
        <div id="notice">
            <div className="content">
                <ul className='navbarlist'>
                    {cscenter.map((item)=>(
                        <li className='navbar noticebar'>
                            <Navbar
                                title={item.title}
                                path={item.path}/>
                        </li>
                    ))}
                </ul>
                <BigTitleNInfo
                    title="공지사항"
                    info="배스킨라빈스의 신제품 안내, 신규 CF등 다양한 소식을 알려드립니다!"/>
                <ul>
                    <NoticeList/>
                </ul>
            </div>
        </div>
    )
};
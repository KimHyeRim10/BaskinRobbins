import '../css/style.css'
import '../css/main/main_commons.css'
import { BigTitleNInfo,EventCategoris } from '../components/MainComponents'
import { useState } from 'react'

export default function FaQ(){
    const [type,setType] = useState('전체')
    const questionCategory = ["전체","제품",'포인트','회원','기타']
    const changeContents = (type) =>{
        alert(type)
    }
    return(
        <div id='faq'>
            <div className='content'>
                <BigTitleNInfo
                    title="자주하는 질문"
                    info="고객의 소리를 적극 경청하고 고객만족향상 활동을 지속적으로 실천합니다."/>
                <ul className='eventcategory'>
                    {questionCategory.map((item,index)=>(
                        <li className='category'>
                        <EventCategoris
                            eventcategoryList={item} 
                            click={changeContents}
                            className={type === item ? "event_active": "unactive"}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};
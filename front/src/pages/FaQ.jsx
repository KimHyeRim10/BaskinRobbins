import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/cscenter/faq.css'
import { BigTitleNInfo,EventCategoris } from '../components/MainComponents'
import { useEffect, useState } from 'react'
import { FaQbox } from '../components/CScenterComponents'
import axios from 'axios'

export default function FaQ(){
    const [type,setType] = useState('전체')
    const [faqList, setFaqList] = useState([]);
    const questionCategory = ["전체","제품",'포인트','회원','기타']
    useEffect(()=>{
        const url = "http://127.0.0.1:8080/cscenter/faq"
        axios({
            method:'get',
            url:url
        })
        .then(response => {
            if(type === '전체'){
                setFaqList(response.data)
            } else{
                setFaqList(response.data.filter(item=>item.category === type))
            }})
        .catch(error=>error)
    },[type])
    const changeContents = (type) =>{
    setType(type)
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
                <ul className='faqLists'>
                    {faqList.map((content)=>(
                        <>
                            <FaQbox content={content}/>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
};
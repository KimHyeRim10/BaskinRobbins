import React, { useEffect, useState } from 'react';
import '../css/style.css'
import '../css/event/event.css'
import '../css/main/main_commons.css'
import { BigTitleNInfo, Navbar,EventCategoris } from '../components/MainComponents';
import { Box} from '../components/EventComponents';
import { Link } from 'react-router-dom';

export default function EventBenefit() {
    const [title,setTitle] = useState('제휴혜택')
    const [eventList, setEventList] = useState([]);
    const [showingList, setShowingList] = useState([
        {
        "category" : "제휴혜택",
        "img" : "images/eventimages/benefit_1.jpg",
        "date": "2024-03-01 ~ 2024-12-31",
        "info" : "LG U+ 멤버십 배스킨라빈스 특별한 제휴 혜택!",
        "detail-img":"images/event_detail/benefit1_detail.png",
        "id":"6"
        },
        {
        "category" : "제휴혜택",
        "img" : "images/eventimages/benefit_2.jpg",
        "date": "2024-01-29 ~ 2024-12-31",
        "info" : "유독Pick 구독하고 배스킨라빈스 4,000원 할인 받기!",
        "detail-img":"images/event_detail/benefit2_detail.jpg",
        "id":"7"
        },
        {
        "category" : "제휴혜택",
        "img" : "images/eventimages/benefit_3.png",
        "date": "상시운영",
        "info" : "이제 배라에서도 애플페이",
        "detail-img":"images/event_detail/benefit3_detail.jpg",
        "id":"12"
        },
        {
        "category" : "제휴혜택",
        "img" : "images/eventimages/benefit_4.png",
        "date": "상시운영",
        "info" : "해피앱에서 5% 적립 놓치지 마세요!",
        "detail-img":"images/event_detail/benefit4_detail.jpg",
        "id":"13"
        },
        {
        "category" : "제휴혜택",
        "img" : "images/eventimages/benefit_5.png",
        "date": "상시운영",
        "info" : "2024 KT 멤버십 배스킨라빈스 특별한 제휴 혜택!",
        "detail-img":"images/event_detail/benefit5_detail.jpg",
        "id":"14"
        },
        {
        "category" : "제휴혜택",
        "img" : "images/eventimages/benefit_6.jpg",
        "date": "상시운영",
        "info" : "T멤버십 회원 대상 싱글레귤러 최대 50%할인 또는 적립",
        "detail-img":"images/event_detail/benefit6_detail.png",
        "id":"15"
        },
        {
        "category" : "제휴혜택",
        "img" : "images/eventimages/benefit_7.png",
        "date": "상시운영",
        "info" : "현대카드 M포인트 50% 사용",
        "detail-img":"images/event_detail/benefit7_detail.jpg",
        "id":"16"
        },
    ]);
    useEffect(()=>{
        fetch("data/promotionList.json")
        .then(response => response.json())
        .then(result => {
        setEventList(result)
        }) 
        .catch(error=>console.log(error))
    },[])

    const eventnavlist = [
        {name:"이벤트", path:"/play/event"},
        {name:"BR 레시피", path:"/play/brreipe/all"}]
    const eventcategoryList =["전체","프로모션","제휴혜택"]
    const changeContents= (type) =>{
        let filterItem = [];
        if(type === '전체')
        {
            setShowingList(eventList)
            setTitle(type)
        }
        else {
        filterItem = eventList.filter(item=>item.category === type);
        setTitle(type)
        setShowingList(filterItem)
        }
    }

    const eventListOrder = [];
    for(let i =0; i<showingList.length; i+=2){
        eventListOrder.push(showingList.slice(i,i+2))
    }

    return (
        <div id='event'>
        <div className='content'>
            <ul className="navbarlist">
            {eventnavlist.map((item)=>(
            <li className='navbar'>
                <Link to={item.path}>
                    <Navbar title={item.name} />
                </Link>
            </li>
            ))}
            </ul>
            <BigTitleNInfo
            title="EVENT"
            info="배스킨라빈스와 함께 해피포인트앱/오프라인 매장에서 진행하는 다양한 이벤트를 확인해보세요"/>
            <ul className='eventcategory'>
            {eventcategoryList.map((item,index)=>(
                <li className='category'>
                <EventCategoris
                    eventcategoryList={item} 
                    click={changeContents}
                    className={title === item ? "event_active": "unactive"}/>
                </li>
            ))}
            </ul>
            <ul className="orderList">
            {eventListOrder.map((items)=>(
                <li className='order'>
                {items.map((item)=>(
                    <Box img={item.img} 
                        category={item.category}
                        title={item.info} 
                        date={item.date}
                        classname={item.category === "프로모션" ? "boxcategorypm":"boxcategorybn"}/>
                ))}
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
    }
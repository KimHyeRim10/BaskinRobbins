import React, { useEffect, useState } from 'react';
import '../css/style.css'
import '../css/event/event.css'
import '../css/main/main_commons.css'
import { BigTitleNInfo, Navbar,EventCategoris } from '../components/MainComponents';
import { Box} from '../components/EventComponents';
import { Link } from 'react-router-dom';

export default function EventPromotion() {
    const [title,setTitle] = useState('프로모션')
    const [eventList, setEventList] = useState([]);
    const [showingList, setShowingList] = useState([
    {
        "category" : "프로모션",
        "img" : "images/eventimages/promotion_umbrella.png",
        "date" :"2024-05-20 ~ 2024-08-31",
        "info" : "배스킨라빈스에서 우산 구매하자! 파인트 이상 구매 시, 투명우산 1,900원",
        "detail-img":"images/event_detail/promotion_umbrella_detail.png",
        "id":"1"
    },
    {
        "category" : "프로모션",
        "img" : "images/eventimages/promotion_pinkdream.png",
        "date" :"2024-05-13 ~ 2024-06-07",
        "info" : "배라와 소비자가 함께 만드는 어린이 놀이터, 핑크스푼 수거 프로그램!",
        "detail-img":"images/event_detail/promotion_pinkdream_detail.png",
        "id":"2"
    },  
    {
        "category" : "프로모션",
        "img" : "images/eventimages/promotion_bear.jpg",
        "date" :"2024-05-03 ~ 2024-06-30",
        "info" : "신세계사이먼 시흥 프리미엄 아울렛 팝업스토어 OPEN!",
        "detail-img":"images/event_detail/promotion_bear_detail.jpg",
        "id":"3"
    },
    {
        "category" : "프로모션",
        "img" : "images/eventimages/promotion_insta.jpg",
        "date" :"2024-05-01 ~ 2024-05-26",
        "info" : "5월 이달의 맛, 인스타그램에 사진을 올려주세요!",
        "detail-img":"images/event_detail/promotion_insta_detail.jpg",
        "id":"4"
    },
    {
        "category" : "프로모션",
        "img" : "images/eventimages/promotion_workshop.png",
        "date" : "상시운영",
        "info" : "워크샵 by 배스킨라빈스 그랜드 오픈",
        "detail-img":"images/event_detail/promotion_workshop_detail.png",
        "id":"5"
    },
    {
        "category" : "프로모션",
        "img" : "images/eventimages/promotion_discount.png",
        "date" :"2023-09-04 ~ 소진 시 까지 ",
        "info" : "아이스크림 스쿱퍼, 해피앱 스캔 시 3천원 OFF!",
        "detail-img":"images/event_detail/promotion_cup_detail.png",
        "id":"8"
    },
    {
        "category" : "프로모션",
        "img" : "images/eventimages/promotion_coupon.png",
        "date" :"2023-07-03 ~ 소진 시 까지",
        "info" : "모슈 텀블러 머그 MD 구매 시 배라 3종 쿠폰 증정",
        "detail-img":"images/event_detail/promotion_coupon_detail.png",
        "id":"9"
    },
    {
        "category" : "프로모션",
        "img" : "images/eventimages/promotion_container.jpg",
        "date" :"2023-07-05 ~ 소진 시 까지 ",
        "info" : "아이스크림 보냉 컨테이너 매장판매 시작!",
        "detail-img":"images/event_detail/promotion_container_detail.png",
        "id":"10"
    },
    {
        "category" : "프로모션",
        "img" : "images/eventimages/promotion_skt.png",
        "date" :"상시운영",
        "info" : "SKT 우주패스, 배스킨라빈스 구독 시 7천원 OFF!",
        "detail-img":"images/event_detail/promotion_skt_detail.jpg",
        "id":"11"
    },
    {
        "category" : "프로모션",
        "img" : "images/eventimages/promotion_cup.png",
        "date": "상시운영",
        "info" : "1회용 컵 사용 줄이기 안내 ",
        "detail-img":"images/event_detail/promotioncup_detail.png",
        "id":"17"
    }
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
                    <Navbar title={item.name}/>
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
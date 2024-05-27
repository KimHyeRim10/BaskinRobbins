import React, { useEffect, useState } from 'react';
import '../css/style.css'
import '../css/event/event.css'
import '../css/main/main_commons.css'
import { BigTitleNInfo, Navbar,EventCategoris } from '../components/MainComponents';
import { Box} from '../components/EventComponents';

export default function Event() {
  const [title,setTitle] = useState('전체')
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
    {title:"이벤트"},
    {title:"BR 레시피"}
  ]
  const eventcategoryList =[
    {title:"전체"},
    {title:"프로모션"},
    {title:"제휴혜택"}
  ]
  
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
            <Navbar title={item.title} />
          </li>
        ))}
        </ul>
        <BigTitleNInfo
          title="EVENT"
          info="배스킨라빈스와 함께 해피포인트앱/오프라인 매장에서 진행하는 다양한 이벤트를 확인해보세요"/>
        <ul className='eventcategory'>
          {eventcategoryList.map((item)=>(
            <li className='category'>
              <EventCategoris
                eventcategoryList={item} 
                click={changeContents}
                className={title === item.title ? "event_active": "unactive"}/>
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
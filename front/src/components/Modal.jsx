import { useEffect, useState } from "react"
import axios from 'axios'
import  '../css/pages.css'

export function ModalDream({closeModal, type}){

    return(
        <>
    <div id='bebetter_modal1' className="modal" onClick={(e)=>e.stopPropagation()}> 
    <button className="modal_close_btn" onClick={closeModal}>X</button>
        <h2>배스킨라빈스의 대표 사회공헌 활동 '핑크드림 캠페인'</h2>
        
        <div className="modal_contents">
        <div className="modal_content">
        <img className="modal_img" src="/images/img_dream_1.jpg" alt="modalimg"/>
        <div className="modal_descri">
        <p className="modal_year">2023</p>
        <p className="modal_title">자립준비 청년들의 <br/> 건강한 자립과 꿈 지원</p>
        <p className="modal_info">전국 자립준비 청년 31명을 모집해<br/> 생애 최초 종합건강검진을 제공하고 장학금을 지급했다.<br/>
        하반기에는 보호 종료 아동의 주거 환경을 개선하고 <br/> 자격증 취득 관련 IT기기 구입비를 추가 지원했다. 
        </p>
            </div>
            </div>

        <div className="modal_content">
        <img className="modal_img" src="/images/img_dream_2.jpg" alt="modalimg"/>
        <div className="modal_descri">
    <p className="modal_year">2024</p>
    <p className="modal_title">아동의 놀 권리와 환경을 생각하는 <br/> 어린이 놀이터 조성 사업</p>
    <p className="modal_info">아동의 놀 권리를 보장하는 유엔아동권리협약 제31조에<br/>브랜ㄷ 상징'31'이 있는 것에서 착안, 노후화된 놀이터를<br/>
    어린이 놀이터로 재정비하는 사업을 기획했다. <br/> 소비자 참여로 핑크스푼을 수거해 놀이터 소재로 재탄생하는<br/>
    업사이클링 프로그램도 진행할 계획이다. 
    </p>
        </div>
        </div>
        </div>
    </div>
        </>
)   }


export function ModalFarm({openModal, closeModal}){

    return(
        <div className="modal_outer"onClick={(e)=>e.stopPropagation()} >
    <div className="modal"  onClick={(e)=>e.stopPropagation()}>
    <button className="modal_close_btn" onClick={closeModal}>X</button>
        <h2>지역 농가 상생 프로젝트 진행중</h2>
        
        <div className="modal_contents">
        <div className="modal_content">
        <img className="modal_img" src="/images/bebetter/img_farm_1.jpg" alt="modalimg"/>
        <div className="modal_descri">
        <p className="modal_year">2019.09</p>
        <p className="modal_title">'
        이천 쌀 아이스크림에 쫀뜩한 떡이<br/>
        쏘-옥 들어간 '쌀떡궁합'
        </p>
        <p className="modal_info">
            고소하면서도 달콤한 인절미 아이스크림과 이천 지역 특산물인 쌀이 들어간
아이스크림이 조화를 이루는 제품이다. 현미, 백미, 흑미 3가지 곡물과 찹쌀떡 리본까지
들어가 바삭하게 씹는 식감과 쫀득한 식감을 모두 맛볼 수 있다.
        </p>
            </div>
            </div>

        <div className="modal_content">
        <img className="modal_img" src="/images/bebetter/img_farm_2.jpg" alt="modalimg"/>
        <div className="modal_descri">
    <p className="modal_year">2020.10</p>
    <p className="modal_title">
        강원도 평창 감자를 활용한 이달의 맛 '미찐 감자'</p>
    <p className="modal_info">
    강원도 평창 감자로 만든 ‘감자 아이스크림’과 감자의 풍미를
더욱 살려주는 ‘치즈 아이스크림’을 섞고,
여기에 바삭하게 씹히는 식감의 ‘감자볼’을 토핑으로 넣은 제품이다
    </p>
        </div>
        </div>
        <div className="modal_content">
        <img className="modal_img" src="/images/bebetter/img_farm_3.jpg" alt="modalimg"/>
        <div className="modal_descri">
    <p className="modal_year">2021.10</p>
    <p className="modal_title">
        해남산 밤고구마를 활용해 만든'치즈 고구마구마'</p>
    <p className="modal_info">
    전라남도 해남의 밤고구마 17톤을 원료로 탄생했다. 고소한 해남산 밤고구마로 만든
    고구마 아이스크림과 부드러운 크림치즈 아이스크림이 특징이다. 광고 영상에 현지
    지역민이 모델로 출연해 ‘치즈 고구마구마’가 가지는 협업과 상생의 의미를 한 번 더 강조했다
    </p>
        </div>
        </div>

        </div>
    </div>
        </div>
)   }

export function ModalLink({openModal, closeModal}){
const [modalList, setModalList] =useState([])
    useEffect(()=>{
        axios.get('/data/bebetter.json')
            .then(res=>{
                const data = res.data;
                setModalList(data)
            })
            .catch(error=>console.log(error))
    },[])

const rows = []
for( let i=0; i<modalList.length; i+=2){
    rows.push(modalList.slice(i,i+2))
}


    return(
        <>
    <div id='bebetter_modal3' className="modal" onClick={(e)=>e.stopPropagation()}>
    <button className="modal_close_btn" onClick={closeModal}>X</button>
        <h2>What is kefii?</h2>
        <p> 씻는 시간, 먹는 시간, 노는 시간을 통해 아이들이 가장행복하고, <br/>
            긍정적인 에너지를 품고 성장할수 있도록 재밌는 놀이 문화의 지평을 열어가고 있습니다. 
        </p>

        <div className="modal_contents">
            <ul className="modal_content">
            {rows.map((items)=>(
            <li key="modallink">
                {items.map((linklist)=>(
                    <div className="modal_call">
            <img className="modal_img" src={linklist.img} alt="modalimg"/>
            <div className="modal_descri">
                <p className="modal_title">{linklist.title} </p>
                <p className="modal_info">{linklist.content}</p>
            </div>
            </div>
             ))} </li>
        ))}
        </ul>
        </div>

        </div>
        </>
        )}



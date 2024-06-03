import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQ, faA } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"

export function Question({img,title,info,btn,link}){
    return(
        <div className="cs_box">
            <img className="icon" src={img} alt="" />
            <div className="cs_box_text">
                <h3 className="box_title">{title}</h3>
                <p className="box_info">{info}</p>
            </div>
            <button className="cs_box_button">
                <a href={link}>{btn}</a>
            </button>
        </div>
    )
};

export function Channel({img,title,way,etc}){
    return(
        <div className="channel_box">
            <img src={img} alt="" />
            <div className="channel_info">
                <h3 className="channel">{title}</h3>
                <h3 className="channel_way">{way}</h3>
                <p className="channel_etc">{etc}</p>
            </div>
        </div>
    )
};

export function VOC({process}){
    return(
        <li className="circle">
            <p className="circle_text">{process}</p>
        </li>
    )
};

export function FaQbox(){
    const [btnOpen, setbtnOpen] = useState(false)
    const handleOpen = () =>{
        setbtnOpen(!btnOpen)
        if(btnOpen === true) {
            document.getElementById('abox').style.marginTop="0rem"
            document.getElementById('abox').style.opacity="1"
            document.getElementById('abox').style.visibility="visible"
        }else{
            document.getElementById('abox').style.marginTop="-4rem"
            document.getElementById('abox').style.opacity="0"
            document.getElementById('abox').style.visibility="hidden"
        }
        
    }
    return(
        <ul className="qubox">
            <li className="test" >
                <div className="questions">
                    <FontAwesomeIcon className="qicon qcolor" icon={faQ}/>
                    <p className="qonly">가격 인상 후 모바일 교환권 사용시 해피포인트는 어떻게 적립되나요?</p>
                    <button type="button" className="openBtn"  onClick={handleOpen}> +</button>
                </div>
            </li>
            <li >
                <div className="answers" id="abox">
                    <FontAwesomeIcon className="qicon acolor" icon={faA} />
                    <p className="aonly">가격 조정 이전 구매된 교환권은 사용 시 인상 전 교환권 가격(액면가)의 0.1%가 적립됩니다.</p>
                </div>
            </li>
        </ul>
    )
};

export function NoticeList(){
    return(
        <li className="noticeinfos">
            <p className="noticerno">31</p>
            <Link to="/notice/detail/:id">
                <p className="noticetitle">대·중소기업 동반성장 플랫폼 상생누리 소개</p>
            </Link>
            <p className="noticedate">2024.06.03</p>
        </li>
    )
};

export function NoticeDetailContent(){
    return(
        <div>
            <h3 className="detailcontenttitle">단체주문도 언제, 어디서나 배스킨라빈스!</h3>
            <p className="detaildate">2022-02-11</p>
            <hr/>
            <img className="detailimage" src="images/cs_center/noticedetail/orderwheneveryouwant.png" alt="" />
            <hr/>
        </div>
    )
};
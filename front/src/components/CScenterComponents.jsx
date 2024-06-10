import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQ, faA } from "@fortawesome/free-solid-svg-icons"
import { useState} from "react"
import { Link } from "react-router-dom"
import { useRef } from "react"


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

export function FaQbox({content,ref,click,index}){
    const [btnOpen, setBtnOpen] = useState(null)
    const handleOpen = (index) =>{
        if(btnOpen === index){
            return setBtnOpen(null)
        }
        setBtnOpen(index)
    }
    console.log(btnOpen)
    return(
        <li className="qubox" onClick={()=>handleOpen(index)} >
                <div className="questions" key={index} 
                                >
                    <FontAwesomeIcon className="qicon qcolor" icon={faQ}/>
                    <span className="qonly">{content.question}</span>
                </div>
                <div className={btnOpen === index ? "answers_open" :"answers"} key={index} ref={ref}>
                    <FontAwesomeIcon className="qicon acolor" icon={faA} />
                    <p className="aonly">{content.answer}</p>
                </div>
        </li>
    )
};

export function NoticeList({list}){
    return(
        <li className="noticeinfos">
            <p className="noticerno">{list.id}</p>
            <Link to={`/cscenter/notice/detail/${list.id}`} >
                <p className="noticetitle">{list.title}</p>
            </Link>
            <p className="noticedate">{list.date}</p>
        </li>
    )
};

export function NoticeDetailContent({noticecontent}){
    return(
        <div>
            <h3 className="detailcontenttitle">{noticecontent.title}</h3>
            <p className="detaildate">{noticecontent.date}</p>
            <hr/>
            <img className="detailimage" src={noticecontent.detail} alt="" />
            <hr/>
        </div>
    )
};
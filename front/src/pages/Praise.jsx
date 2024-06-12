import React,{useState, useEffect}from "react";
import "../css/pages.css";
import axios from 'axios'
import { NavbarCscenter } from "../components/Navbar.jsx";

export default function Praise (){
   
const [praise, setPrasie] = useState([])
const [defaultyear, setDefaultYear] = useState('2023-03')
    useEffect(()=>{
        axios.get('/data/praise.json')
            .then(res=>{
                setPrasie(res.data.filter(item=>item.year === defaultyear))
            })
            .catch(error=>console.log(error))
    },[defaultyear])
    

    return(
        <div className="content">
<NavbarCscenter/>
<div className="page_top">
<h2 className="title">고객Best 칭찬점포 안내</h2>
<p className="title_sub">
  배스킨라빈스의 점포를 칭찬해주세요!<br/>
  고객 여러분의 칭찬과 격려에 감사 드립니다!
</p>
</div>
<div className="policyes_content_div">
    <select className="policyes_select" 
            onChange={(e)=>setDefaultYear(e.target.value)}>
        <option value="2023-03">2023년 3분기 Best 칭찬점포</option>
        <option value="2023-02">2023년 2분기 Best 칭찬점포</option>
        <option value="2023-01">2023년 1분기 Best 칭찬점포</option>
    </select>
<ul className='praiselists'>
            {praise.map((item)=>(
                <li className='praise_list'>
                    <div className='praise_box'>
                    <img src="/images/praise/img_default.jpg" alt="praiseimg" 
                           className='praise_img'/>
                    <div className='praise_contents'>
                <p className='praise_id'>칭찬점포{item.id}</p>
                <p className='praise_store'>{item.shop}점을 칭찬합니다.</p>
                <br />
                <p>{item.content}</p>
                </div>
                </div>
                </li>
))}
    
    </ul>

</div>
</div>
    )
}
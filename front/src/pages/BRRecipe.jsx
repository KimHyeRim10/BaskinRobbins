import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/event/brrecipe.css'
import { Navbar, BigTitleNInfo, EventCategoris } from '../components/MainComponents'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BRRecipe(){
    const [type, setType] = useState('전체')
    const eventnavlist = [
        {name:"이벤트", path:"/play/event"},
        {name:"BR 레시피", path:"/play/brreipe/all"}]
    const eventcategoryList =["전체","셰프 & 파티시에","바리스타 & 바텐더","인플루언서"]
    const changeContents = (type) =>{
        alert(type)
    }
    return(
        <div id='brrecipe'>
            <div className='content'>
            <ul className='navbarlist'>
                {eventnavlist.map((item)=>(
                    <li className='navbarrecipe'>
                        <Link to={item.path}>
                            <Navbar
                                title={item.name}/>
                        </Link>
                    </li>
                ))}
            </ul>
            <BigTitleNInfo
                title="BR Recipe"
                info="다양한 전문가들이 제안하는 배라 행복레시피"/>
                <ul className='eventcategory'>
                    {eventcategoryList.map((item)=>(
                        <li className='category'>
                        <EventCategoris
                            eventcategoryList={item} 
                            click={changeContents}
                            className={type === item.title ? "event_active": "unactive"}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};
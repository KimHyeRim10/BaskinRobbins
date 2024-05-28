import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/event/brrecipe.css'
import { Navbar, BigTitleNInfo, EventCategoris } from '../components/MainComponents'
import { useState } from 'react'
export default function BRRecipe(){
    const [type, setType] = useState('전체')
    const eventlist =[
        {title:"이벤트"},
        {title:"BR 레시피"}
    ]
    const eventcategoryList =[
        {title:"전체"},
        {title:"셰프 & 파티시에"},
        {title:"바리스타 & 바텐더"},
        {title:"인플루언서"}
    ]
    const changeContents = (type) =>{
        alert(type)
    }
    return(
        <div id='brrecipe'>
            <div className='content'>
            <ul className='navbarlist'>
                {eventlist.map((item)=>(
                    <li className='navbar'>
                        <Navbar
                            title={item.title}/>
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
import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/event/brrecipe.css'
import { Navbar, BigTitleNInfo, EventCategoris } from '../components/MainComponents'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { RecipeBox } from '../components/BrRecipeComponents.jsx'

export default function BRRecipe(){
    const [type, setType] = useState('전체')
    const [recipeList, setRecipeList]=useState([]);

    useEffect(()=>{
        const url = "http://127.0.0.1:8080/play/brrecipe/all"
        axios({
            method:'get',
            url:url
        })
        .then(response=>{
            type==="전체" ? setRecipeList(response.data):setRecipeList(response.data.filter(item=>item.category === type))
        })
    },[type])

    const eventnavlist = [
        {name:"이벤트", path:"/play/event"},
        {name:"BR 레시피", path:"/play/brreipe/all"}
    ]
    const eventcategoryList =["전체","셰프 & 파티시에","바리스타 & 바텐더","인플루언서"]
    const changeContents = (type) =>{
        setType(type)
    }
    const eventListOrder = [];
        for(let i =0; i<recipeList.length; i+=2){
        eventListOrder.push(recipeList.slice(i,i+2))
    }
    console.log(type)

    return(
        <div id='brrecipe'>
            <div className='content'>
            <ul className='navbarlist'>
                {eventnavlist.map((item)=>(
                    <li className='navbarrecipe'>
                            <Navbar
                                title={item.name}
                                path={item.path}/>
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
                            className={type === item? "event_active": "unactive"}/>
                        </li>
                    ))}
                </ul>
                <ul className='recipecontents'>
                    {eventListOrder.map((items)=>(
                        <li className='recipecontentsList'>
                            {items.map((item)=>(
                                <RecipeBox recipe={item}/>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};
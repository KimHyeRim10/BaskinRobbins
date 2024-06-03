import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/event/event.css'
import { Navbar } from '../components/MainComponents'
import { DetailNotice, DetailTitle } from '../components/EventDetailComponents'
import { Link } from 'react-router-dom'
import { FaQbox } from '../components/CScenterComponents'

export default function EventDetail(){
    const eventDetailNav = [
        {"name":"이벤트",
        "path":"/play/event"},
        {"name":"BR 레시피",
        "path":"/play/brrecipe"},
    ]
    return(
        <div id='eventDetail'>
            <div className='content'>
                <ul className='navbarlist'>
                    {eventDetailNav.map((item)=>(
                        <li className='navbar'>
                            <Navbar
                                title={item.name}
                                path={item.path}/>
                        </li>
                    ))}
                </ul>
                <DetailTitle/>
                <hr/>
                <img src="images/event_detail/promotion_pinkdream_detail.png" alt="" />
                <hr/>
                <DetailNotice/>
                <hr/>
                <button className='backbtn'><Link
                className='btncontent'>목록</Link></button>
            </div>
        </div>
    )
};
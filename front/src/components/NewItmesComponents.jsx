import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export function NewItemsList() {
  const[currentIndex,setCurrentIndex]=useState(0)
  const[newItemList, setnewItemList] = useState([])
  const slideRef = useRef(null)
  useEffect(()=>{
    axios({
      method:'get',
      url:'http://127.0.0.1:8080/newitem'
    })
      .then(result=>{
        setnewItemList(result.data)
      })
      .catch(error=>console.log(error))

      if(currentIndex === 1){
        slideRef.current.style.transition = "all 500ms ease-in"
        slideRef.current.style.transform = `translateX(-${currentIndex*43}%)`
      } else{
        slideRef.current.style.transition = "all 500ms ease-in"
      slideRef.current.style.transform = `translateX(-${currentIndex}00%)`
      }
  },[currentIndex])


  const movePage = (index)=>{
    setCurrentIndex(index)
  }

  function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
        function tick() {
        savedCallback.current();
        }
        if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
        }
    }, [delay]);
    }

    useInterval(()=>{
        if(currentIndex === 1){
            setCurrentIndex(0)
        } else{
            setCurrentIndex(currentIndex + 1)
        }
    },5000)

  return (
    <>
      <ul className='MenuList' ref={slideRef}>
        {newItemList.map((item,index)=>(
          <li className='MenuItems'>
              <img className="bigimage" src={item.img}alt="" />
            <ul className='Menus'>
              {{...item}.items.map((item)=>(
                <li>
                <NewItembox
                  img={item.img}
                  name={item.name}/>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <ul className='buttonlist'>
        {newItemList.map((item,index)=>(
          <li>
            <button className={currentIndex === index ? "activeni" : "button"}
                    onClick={()=>movePage(index)}>●</button>
          </li>
        ))}
      </ul>
    </>
);
}


export function NewItembox({img,name,color}) {
  return (
    <div className="itemBox">
      <img src={img}
            className="boxImage" alt="" />
        <p className="boxTitle">{name}</p>
        <button className="boxBtn" style={{"background-color":{color}}}><FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
);
}
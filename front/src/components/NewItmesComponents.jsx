import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
export function NewItemsList() {
  const[currentIndex,setCurrentIndex]=useState(0)
  const[newItemList, setnewItemList] = useState([])
  const slideRef = useRef(null)
  useEffect(()=>{
    fetch('data/newitem.json')
      .then(response => response.json())
      .then(result=>{
        setnewItemList(result)
      })
      .catch(error=>console.log(error))
  },[])
  useEffect(()=>{
    if(currentIndex === 1){
      slideRef.current.style.transition = "all 500ms ease-in"
      slideRef.current.style.transform = `translateX(-${currentIndex*43}%)`
    } else{
      slideRef.current.style.transition = "all 500ms ease-in"
    slideRef.current.style.transform = `translateX(-${currentIndex}00%)`
    }
  },[currentIndex])

  const rows = [];
  for(let i = 0; i<newItemList.length; i+=4){
    rows.push(newItemList.slice(i,i+4))
  }
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
    },3000)
  return (
    <>
      <ul className='MenuList' ref={slideRef}>
        {rows.map((items,index)=>(
          <li className='MenuItems'>
            <img className="bigimage" src='images/newitems/newitem_big1.jpg' alt="" />
            <div className='Menus'>
            {items.map((item)=>(
              <>
              <NewItembox
                img={item.img}
                name={item.name}/>
              </>
            ))}
            </div>
          </li>
        ))}
      </ul>
      <ul className='buttonlist'>
        {rows.map((item,index)=>(
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
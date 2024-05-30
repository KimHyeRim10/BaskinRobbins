import { useEffect, useRef, useState } from "react";

export function PromotionList() {
  const [promotion,setPromotion] = useState([])
  const [currentIndex,setCurrentIndex] = useState(0)
  const slideRef = useRef(null)
  useEffect(()=>{
    fetch("data/promotionList.json")
      .then(response => response.json())
      .then(result => {
        setPromotion(result)
      })
      .catch(error=>console.log(error))
  },[])
  useEffect(()=>{
      slideRef.current.style.transition = "all 500ms ease-in"
      slideRef.current.style.transform = `translateX(-${currentIndex}00%)`
  },[currentIndex])
  const promotionList = promotion.filter((item)=> item.category === '프로모션')
  const promotionContents = [];
  for(let i =0; i<promotionList.length; i+=5){
    promotionContents.push(promotionList.slice(i,i+5))
  }
  const movePage = (index) =>{
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
    <div className="carousel">
      <ul className="promotionlist" ref={slideRef}>
      {promotionContents.map((items)=>(
        <li className="promotions">
          {items.map((content)=>(
        <div className="promotion">
          <img src={content.img} className="promotionimage" alt="" />
          <p className="date">{content.date}</p>
          <p className="info">{content.info}</p>
        </div>
          ))}
          </li>
      ))}
      </ul>
      <ul className="buttonlist">
          {promotionContents.map((item,index)=>(
            <li>
              <button className={currentIndex === index ? "activepr" : "button"}
                      onClick={()=>movePage(index)}>●</button>
            </li>
          ))}
      </ul>
    </div>
);
}
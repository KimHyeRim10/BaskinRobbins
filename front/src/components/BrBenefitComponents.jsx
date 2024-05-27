import { useRef,useEffect, useState } from "react";

export function BenefitCarousel() {
  const slideRef = useRef(null)
  const [benefit, setBenefit] = useState([])
  useEffect(()=>{
    fetch("data/promotionList.json")
      .then(response => response.json())
      .then(result => {
        setBenefit(result)
      })
      .catch(error=>console.log(error))
  },[])
  const benefitList = benefit.filter((item)=> item.category === '제휴혜택')
  const benefitContents = [];
  for(let i =0; i<benefitList.length; i+=5){
    benefitContents.push(benefitList.slice(i,i+5))
  }
/*   function useInterval(callback, delay) {
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
        slideRef.current.style.transition = "all 500ms ease-in"
        slideRef.current.style.transform = "translateX(-980px)"
    },3000) */
  return (
    <ul className="benefitList" ref={slideRef}>
      {benefitContents.map((items)=>(
        <>
          {items.map((item)=>(
            <li>
              <img src={item.img} alt="" />
            </li>
          ))}
        </>
      ))}
    </ul>
);
}
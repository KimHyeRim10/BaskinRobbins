import "../css/style.css"
import "../css/main/main_commons.css"
import "../css/store/flavor.css"
import { BigTitleNInfo, EventCategoris, Navbar } from "../components/MainComponents";
import { FlavorImage, StoreInfo, StoreCarousel, Dots } from "../components/FlavorComponents";
import { useEffect, useRef, useState } from "react";
import '../css/store/modal_y.css'

export default function Flavor(){
    const [flavorStores, setFlavorStores] = useState([]);
    const [showStore, setShowStore] = useState([
        {
            "name":"부산서면중앙점",
            "address":"부산 부산진구 부전동 195-3 1층",
            "number":"051-803-1180",
            "time":"AM 10 ~ PM 11",
            "menu":"카페브리즈",
            "service":["주차가능, ","해피포인트 적립가능, ","해피오더 딜리버리, ","해피오더 픽업"],
            "etc":[
                {
                    "special":"선데볼",
                    "img":"images/brstore/specialmenu_bowl.png",
                    "desc":"갓 구운 바삭한 와플콘에 아이스크림을 듬뿍 넣고 토핑으로 화려함을 더한 선데볼"
                },
                {
                    "special":"아이스 타코",
                    "img":"images/brstore/specialmenu_icetaco.png",
                    "desc":"매장에서 제조한 바삭한 와플 쉘에 아이스크림과 초콜릿 코팅으로 달콤함과 짭짤함을 동시에 맛볼 수 있는 아이스 타코"
                }
            ],
            "map":[
                {
                    "lat":"35.1539437",
                    "long":"129.0593831"
                }
            ]
        }
    ])
    const [currentIndex,setCurrentIndex] = useState(0);
    const slideRef = useRef(null);

    const changeContent = (type)=>{
        let filterItem = [];
        filterItem = flavorStores.filter(store=>store.name === type);
        setShowStore(filterItem)
    }
    useEffect(()=>{
        fetch('data/flavorstores.json')
        .then(response=>response.json())
        .then(result=>setFlavorStores(result))
        .catch(error=>console.log(error))
    },[])
    const storecategories = ["100 flavor","flow","배달주문","단체주문"]
    const flavorinfo = {
        "image1":"images/brstore/brstore_100flavor_item1.png",
        "image2":"images/brstore/brstore_100flavor_item2.png",
        "title1":"베라에서 만나는 아르데코 스타일의 공간",
        "title2":"취향대로 고르는 100가지 아이스크림",
        "info1":"글로벌 인테리어 디자인 브랜드 오스모스(OSMOSE)사와 협업해 우아한 라인과 기하학적 디자인의 아르데코 스타일을 현대적으로 구현했습니다. 아트슈머까지 만족시킬 예술적인 인테리어가 돋보이는 공간입니다.",
        "info2":"해외 인기 플레이버와 이달의 맛으로 선보였던 히트 메뉴, 트렌드를 반영한 오가닉 및 저칼로리 라인과 파르나스몰점의 시그니처 플레이버 등 풍성하게 준비된 아이스크림 컬렉션을 즐겨보세요."
    }
    const storeList = ["부산서면중앙점","파르나스몰점","SPC스퀘어점","강남대로점"]
    useEffect(()=>{
            slideRef.current.style.transition = "all 300ms ease-in"
            slideRef.current.style.transform = `translateX(-${currentIndex*48.5}%)`},[currentIndex])

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
                    if(currentIndex === showStore[0].etc.length-1){
                        setCurrentIndex(0)
                    } else{
                        setCurrentIndex(currentIndex + 1)
                    }
                },3000)
    const carouselbtn = (index) =>{
        setCurrentIndex(index)
    }
    return(
        <div id="flavor">
            <div className="content">
                <ul className="navbarlist">
                {storecategories.map((item)=>(
                    <li className="navbar">
                        <Navbar title={item}/>
                    </li>
                ))}
                </ul>
                <BigTitleNInfo
                title="100 Flavor"
                info="배스킨라빈스 100flavor"/>
                <div className="100flavor_advertisement">
                    <h3 className="adtitles">
                        <span className="flavor_title">All About ICE CREAM 100</span>
                    </h3>
                    <ul className="flavorimages">
                    <FlavorImage
                    image1={flavorinfo.image1}
                    info1={flavorinfo.info1}
                    image2={flavorinfo.image2}
                    info2={flavorinfo.info2}
                    title1={flavorinfo.title1}
                    title2={flavorinfo.title2}/>
                    </ul>
                </div>
                <div className="flavor_carousel">
                <ul className="storeCategories">
                    {storeList.map((item)=>(
                        <li className="category">
                            <EventCategoris
                                click={changeContent}
                                eventcategoryList={item}
                                className={item === showStore[0].name ? "active":"unactive"}
                                />
                        </li>
                    ))}
                </ul>
                <div className="carousel_content">
                    <ul className="flavorstores">
                        {showStore.map((store)=>(
                            <>
                            <StoreInfo store={store}/>
                            </>
                        ))}
                    </ul>
                    <div className="display">
                        <ul className="carouselList" ref={slideRef}>
                            {showStore.map((store)=>(
                                <StoreCarousel
                                    store={store}/>
                            ))}
                        </ul>
                    </div>
                    <ul className="dotList">
                        <Dots store={showStore}
                                index={currentIndex}
                                click={carouselbtn}/>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
}
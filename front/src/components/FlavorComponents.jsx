export function FlavorImage ({image1,title1,info1,image2,title2,info2}){
    return(
        <>
            <li className="left">
                <img src={image1} alt="" />
                <span className="imagetext">
                    <p className="imagetitle">{title1}</p>
                    <p className="imageinfo">{info1}</p>
                </span>
            </li>
            <li className="right">
                <span className="imagetext">
                    <p className="imagetitle">{title2}</p>
                    <p className="imageinfo">{info2}</p>
                </span>
                <img src={image2} alt="" />
            </li>
        </>
    );
}

export function StoreInfo({name,address,number,time,menu,service}){
    return(
        <>
        <li className="store_info_list">
            <h3 className="store_info_name">{name}</h3>
            <button className="flavor_map">지도보기</button>
        </li>
        <li className="store_info_list" >
            <p className="store_info_title">매장주소</p>
            <p className="store_info_address">{address}</p>
        </li>
        <li className="store_info_list">
            <p className="store_info_title">전화번호</p>
            <p className="store_info_number store_info_result">{number}</p>
        </li>
        <li className="store_info_list">
            <p className="store_info_title">운영시간</p>
            <p className="store_info_number store_info_result">{time}</p>
        </li>
        <li className="store_info_list">
            <p className="store_info_title">스페셜 메뉴</p>
            <p className="store_info_menu store_info_result">{menu}</p>
        </li>
        <li className="store_info_list">
            <p className="store_info_title">매장 서비스</p>
            <p className="store_info_service store_info_result">{service}</p>
        </li>
        </>
    )
};
export function StoreCarousel({store}){
    let storeinfo = {...store}
    let carouselinfo = storeinfo.etc
    return(
        <>
            {carouselinfo.map((menu)=>(
                <li>
                <img src={menu.img}/>
                <p className="carousel_menu">{menu.special}</p>
                <p className="carousel_desc">{menu.desc}</p>
                </li>
            ))}
        </>
    )
};

export function Dots({store,click,index}){
    let storeinfo = {...store}
    let dots = storeinfo[0].etc
    const sendingIndex = (index) =>{
        click(index)
    }
    const currentIndex = {index}
    console.log("current",currentIndex)
    console.log('index',index)
    return(
        <>
        {dots.map((item,index)=>(
            <li className="lil">
                <button className={ currentIndex.index === index ? " dot_active":"dot_unactive"} 
                    onClick={()=>sendingIndex(index)}>●</button>
            </li>
            ))}
        </>
    )
};
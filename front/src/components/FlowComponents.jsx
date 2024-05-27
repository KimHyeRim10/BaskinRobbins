export function FlowInfo({title,desc}){
    return(
        <>
        <h3 className="info_title">{title}</h3>
        <p className="info_desc">{desc}</p>
        </>
    )
};

export function FlowStores(){
    return(
        <li className="flow_store_box">
            <h3 className="flow_store_name">flow 도곡</h3>
            <button>지도보기</button>
            <div className="flow_store_order">
                <p className="flow_store_row">매장주소</p>
                <p>서울 강남구 도곡동 902-2 지상 1층 102호</p>
            </div>
            <div className="flow_store_order">
                <p className="flow_store_row">운영시간</p>
                <p>AM 10~PM 11</p>
            </div>
            <div className="flow_store_order">
                <p className="flow_store_row store_number">연락처</p>
                <p>02-409-77737</p>
            </div>
        </li>
    )
};
export function FlowInfo({title,desc}){
    return(
        <>
        <h3 className="info_title">{title}</h3>
        <p className="info_desc">{desc}</p>
        </>
    )
};

export function FlowStores({name,address,time,number}){
    return(
        <li className="flow_store_box">
            <h3 className="flow_store_name">{name}</h3>
            <button className="flowstoremap">지도보기</button>
            <div className="flow_store_order">
                <p className="flow_store_row">매장주소</p>
                <p>{address}</p>
            </div>
            <div className="flow_store_order">
                <p className="flow_store_row">운영시간</p>
                <p>{time}</p>
            </div>
            <div className="flow_store_order">
                <p className="flow_store_row store_number">연락처</p>
                <p>{number}</p>
            </div>
        </li>
    )
};
export function Question({img,title,info,btn,link}){
    return(
        <div className="cs_box">
            <img className="icon" src={img} alt="" />
            <div className="cs_box_text">
                <h3 className="box_title">{title}</h3>
                <p className="box_info">{info}</p>
            </div>
            <button className="cs_box_button">
                <a href={link}>{btn}</a>
            </button>
        </div>
    )
};

export function Channel({img,title,way,etc}){
    return(
        <div className="channel_box">
            <img src={img} alt="" />
            <div className="channel_info">
                <h3 className="channel">{title}</h3>
                <h3 className="channel_way">{way}</h3>
                <p className="channel_etc">{etc}</p>
            </div>
        </div>
    )
};

export function VOC({process}){
    return(
        <li className="circle">
            <p className="circle_text">{process}</p>
        </li>
    )
};
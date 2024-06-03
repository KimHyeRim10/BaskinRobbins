export function Box({list,classname}) {
  return (
    <div className="box">
      <div className="imagebox">
      <img className="boximage" src={list.img} alt="" />
      <p className="dday"></p>
      </div>
      <div className="texts">
        <p className={classname}>{list.category}</p>
        <h3 className="boxtitle">{list.info}</h3>
        <p className="boxdate">{list.start}~{list.end}</p>
      </div>
    </div>
);
}


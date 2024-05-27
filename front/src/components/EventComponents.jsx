

export function Box({img,category,title,date,classname}) {
  return (
    <div className="box">
      <div className="imagebox">
      <img className="boximage" src={img} alt="" />
      <p className="dday">D-17</p>
      </div>
      <div className="texts">
        <p className={classname}>{category}</p>
        <h3 className="boxtitle">{title}</h3>
        <p className="boxdate">{date}</p>
      </div>
    </div>
);
}
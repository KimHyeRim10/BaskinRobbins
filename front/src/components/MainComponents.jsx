import { Link } from "react-router-dom";
export function Title({title, desc}) {
  return (
    <div className='title_parts'>
      <h1 className='title'>{title}</h1>
      <p className='desc'>{desc}</p>
    </div>
);
}

export function Navbar({title,path}) {
  return (
    <div className="navbar">
      <Link to={path}>
        <button className="navbartitle">{title}</button>
      </Link>
    </div>
);
}

export function BigTitleNInfo({title,info}) {
  return (
    <div className="bigtitleninfo">
        <h2 className="bigTitle">{title}</h2>
        <p className="bigInfo">{info}</p>
    </div>
);
}

export function EventCategoris({eventcategoryList,className,click}) {
  const eventChange = () =>{
    click(eventcategoryList)
  }
  return (
    <button className={className}
            onClick={eventChange}
            >{eventcategoryList}</button>
);
}
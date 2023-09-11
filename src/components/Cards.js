import { useState } from "react"


function Cards({id,image,info,price,name,removeTour}) {

  const[readmore,setReadmore]=useState(false);
   const description=readmore ? info :`${info.substring(0,200)}...`;

  function readmoreHandeler() {
    setReadmore(!readmore);
  }
  return (
    <div className="card">
      <img src={image} className="image"></img>
      <div className="tours-details">
      <h4 className="tour-name">{name}</h4>
      <h4 className="tour-price">₹{price}</h4>      
      </div>
      <div className="description">
        {description}
        <span className="read-more" onClick={readmoreHandeler}>
          {readmore ? `Show Less`:`Read More`}
        </span>
      </div>
      <button className="btn-red" onClick={()=>removeTour(id)}>
        Not Intrested
      </button>
    </div>
  )
};

export default Cards;

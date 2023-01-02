import React from "react";

const Card = ({ item,image }) => {
//   const [open, setOpen] = useState(true);
//   const { state, setdropdowntext } = useContext(RouteContext);
console.log("item",item);
  if (item.cards) {
    return (
    <>
    <div className="cardtitle">
        <h2>{item.title}</h2>
    </div>

    <div className="gridcards">
    {
    item.cards.map((data, index) =>{
        return(
      <div key={index} className='card'>
        <span>{data.active?'Active':'Close'}</span>
        <div>
          <img src={image} alt={`${data.company}`} />
        </div>
        <p className="name">{data.name}</p>
        <p className="companyname">{data.company}</p>
      </div>
        );
    })
    }
    </div>
    </>
    )
}
 else {
    return (
    <div className="cardtitle">
        <h2>{item.title}</h2>
    </div>
    );
  }
}
export default Card;


import OfferCard from "../offerCard/OfferCard";
import "./offers.css"


const Offers = ({ offers }) => {

  return(
    <div className="offers container">
      {offers.map((offer, index)=> {
        return (
          <OfferCard offer={offer} id={offer._id}/>
        )
      })}
    </div>
  )
}


export default Offers;
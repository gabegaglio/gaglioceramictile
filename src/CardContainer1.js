
import Services from "./Services.js";

const CardContainer1 = () => (
  <>
    <div className="cardWrap">
      <div className="cardContainer">
        <div className="cardDiv">
          <img src={`${process.env.PUBLIC_URL}/images/mud2.jpg`} alt="mud tile" />
          <p>Cement</p>
        </div>
        <div className="cardDiv">
          <img src={`${process.env.PUBLIC_URL}/images/flooring.jpg`} alt="flooring tile" />
          <p>Flooring</p>
        </div>
        <div className="cardDiv">
          <img src={`${process.env.PUBLIC_URL}/images/bathroom2.jpg`} alt="bathroom tile" />
          <p>Bathrooms</p>
        </div>
        <div className="cardDiv">
          <img src={`${process.env.PUBLIC_URL}/images/kitchen.jpg`} alt="kitchen tile" />
          <p>Kitchens</p>
        </div>
      </div>
    </div>
  </>
);

export default CardContainer1;


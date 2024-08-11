const CardContainer2 = () => {
    return (
        
        <div className="cardWrap">
            <div className="cardContainer">
                <div className="cardDiv">
                    <img src={process.env.PUBLIC_URL + "/images/backsplash.jpg"} alt="Backsplashes"/>
                    <p>Backsplashes</p>
                </div>
                <div className="cardDiv">
                    <img src={process.env.PUBLIC_URL + "/images/niche.jpg"} alt="Niches"/>
                    <p>Niches</p>
                </div>
                <div className="cardDiv">
                    <img src={process.env.PUBLIC_URL + "/images/fireoven.jpg"} alt="Fireplaces"/>
                    <p>Fireplaces</p>
                </div>
                <div className="cardDiv">
                    <img src={process.env.PUBLIC_URL + "/images/wall.jpg"} alt="Walls"/>
                    <p>Walls</p>
                </div>
            </div>
        </div>
    )
}

export default CardContainer2;
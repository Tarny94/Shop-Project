import react from "react";
import '../Styles/Card.scss'

const Card = () => {
    return (
        <div className="containers-card">
            <div className="cards">
                <div className="img">
                    <img alt="Image"  />
                </div>
                <div className="card-title">
                    <h1>
                        Title
                    </h1>
                </div>
                 <div className="card-description">
                    <h3>
                        Description
                    </h3>
                 </div>
                <div className="card-price">
                    <h2>Price</h2>
                    <h2>Rating</h2>
                </div>

                
            </div>
        </div>
    )
}

export default Card;
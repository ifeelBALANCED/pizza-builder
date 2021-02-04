import React from "react";
import {Motions} from "./Motions/Motions";
import {useHistory} from "react-router-dom";
import "./styles.scss"
import FruitLabels from "./FruitLabels/FruitLabels";


const Customize = ({ingredients, setIngredients}) => {
    const history = useHistory();

    return (
        <div className="customize">
            <div className="customize__content">
                <div className="customize__content-header">
                    <Motions ingredients={ingredients}/>
                </div>
            </div>
            <div className="customize__content">
                <FruitLabels
                    ingredients={ingredients}
                    setIngredients={setIngredients}
                />
                <button
                    onClick={() => history.push("/checkout")}
                    className="proceedToCheckout"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}

export default Customize
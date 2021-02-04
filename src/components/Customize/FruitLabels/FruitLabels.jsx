import React from 'react'
import FruitLabel from "./FruitLabel/FruitLabel"

const FruitLabels = ({ingredients, setIngredients}) => {
    const labels = [
        {
            name: "Pineapple",
            cl: "container-checkbox",
            checked: ingredients["pineapple"],
            change: event => changeHandler(event.currentTarget.checked, "pineapple"),
            sc: "checkmark",
        },
        {
            name: "Basil",
            cl: "container-checkbox",
            checked: ingredients["basil"],
            change: event => changeHandler(event.currentTarget.checked, "basil"),
            sc: "checkmark",
        },
        {
            name: "Olive",
            cl: "container-checkbox",
            checked: ingredients["olive"],
            change: event => changeHandler(event.currentTarget.checked, "olive"),
            sc: "checkmark",
        },
        {
            name: "Tomato",
            cl: "container-checkbox",
            checked: ingredients["tomato"],
            change: event => changeHandler(event.currentTarget.checked, "tomato"),
            sc: "checkmark",
        },
        {
            name: "Mushroom",
            cl: "container-checkbox",
            checked: ingredients["mushroom"],
            change: event => changeHandler(event.currentTarget.checked, "mushroom"),
            sc: "checkmark",
        },
        {
            name: "Cheese",
            cl: "container-checkbox",
            checked: ingredients["cheese"],
            change: event => changeHandler(event.currentTarget.checked, "cheese"),
            sc: "checkmark",
        },
    ]
    const changeHandler = (event, name) => {
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        newIngredients[name] = event;
        setIngredients(newIngredients);
        localStorage.setItem("ingredients", JSON.stringify(newIngredients));
    };
    return labels.map((l, idx) => <FruitLabel l={l} idx={idx}/>)
};

export default FruitLabels;

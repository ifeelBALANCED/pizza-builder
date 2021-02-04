import React from "react";
import {Motion} from "./Motion/Motion";
import Basil from "../../../assets/Basil.png";
import Olive from "../../../assets/Olive.png";
import Pineapple from "../../../assets/Pineapple.png";
import Tomato from "../../../assets/Tomato.png";
import Cheese from "../../../assets/BaseCheese.png";
import Mushroom from "../../../assets/Mushroom.png";
import Base from "../../../assets/PizzaBase.png";

export const Motions = ({ingredients}) => {
    const motions = [
        {
            initial: {opacity: 0},
            animate: {
                y: ingredients["basil"] ? 100 : -100,
                opacity: ingredients["basil"] ? 1 : 0,
            },
            transition: {duration: 1},
            cl: "ingredients z4",
            src: Basil,
            alt: "Basil",
            imgCl: "motion-img"
        },
        {
            initial: {opacity: 0},
            animate: {
                y: ingredients["olive"] ? 100 : -100,
                opacity: ingredients["olive"] ? 1 : 0,
            },
            transition: {duration: 1},
            cl: "ingredients z4",
            src: Olive,
            alt: "Olive",
            imgCl: "motion-img"
        },
        {
            initial: {opacity: 0},
            animate: {
                y: ingredients["pineapple"] ? 100 : -100,
                opacity: ingredients["pineapple"] ? 1 : 0,
            },
            transition: {duration: 1},
            cl: "ingredients z3",
            src: Pineapple,
            alt: "Pineapple",
            imgCl: "motion-img"
        },
        {
            initial: {opacity: 0},
            animate: {
                y: ingredients["tomato"] ? 100 : -100,
                opacity: ingredients["tomato"] ? 1 : 0,
            },
            transition: {duration: 1},
            cl: "ingredients z4",
            src: Tomato,
            alt: "Tomato",
            imgCl: "motion-img"
        },
        {
            initial: {scale: 0},
            animate: {scale: ingredients["cheese"] ? 1 : 0,},
            transition: {duration: 0.3},
            cl: "cheese z1",
            src: Cheese,
            alt: "Cheese",
            imgCl: "motion-img"
        },
        {
            initial: {opacity: 0},
            animate: {
                y: ingredients["mushroom"] ? 100 : -100,
                opacity: ingredients["mushroom"] ? 1 : 0,
            },
            transition: {duration: 1},
            cl: "ingredients z4",
            src: Mushroom,
            alt: "Mushroom",
            imgCl: "motion-img"
        },
        {
            transition: {duration: 1},
            src: Base,
            alt: "Pizza Base",
            imgCl: "motion-img"
        },
    ]
    return motions.map((m, index) => <Motion m={m} index={index}/>)
}

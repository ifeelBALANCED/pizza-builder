import {motion} from "framer-motion";
import React from "react";

export const Motion = ({m, index}) => <motion.div
    key={index}
    initial={m.initial}
    animate={m.animate}
    transition={m.transition}
    className={m.cl}
>
    <img src={m.src} alt={m.alt} className={m.imgCl}/>
</motion.div>
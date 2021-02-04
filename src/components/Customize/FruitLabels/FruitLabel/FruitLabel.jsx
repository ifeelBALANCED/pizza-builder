import React from 'react';

const FruitLabel = ({l, idx}) => {
    return <label className={l.cl} key={idx}>
        {l.name}
        <input
            type="checkbox"
            checked={l.checked}
            onChange={l.change}
        />
        <span className={l.sc}/>
    </label>
};

export default FruitLabel;

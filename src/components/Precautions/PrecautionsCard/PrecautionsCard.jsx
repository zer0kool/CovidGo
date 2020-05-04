import React from 'react'

import './PrecautionsCard.css'
const iconPath = process.env.PUBLIC_URL + '/assets/images/icons';

export default function PrecautionsCard(props) {
    return (
            <div className="precautions_card">
                <img src={`${iconPath}/${props.imgNum}.png`} alt="img-card" className="img_card" />
                <p className="white-text text_card"> { props.text} </p>
            </div>
    )
}

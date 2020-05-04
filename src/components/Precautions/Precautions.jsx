import React, {Fragment,useState ,useEffect} from 'react'
import Wavook from "../Wavook/Wavook"
import PrecautionsCard from './PrecautionsCard/PrecautionsCard'
import Loading from '../Loading/Loading'

import './Precautions.css'

export default function Precautions() {

    const [showLoading ,setShowLoading] = useState(true);

    let precautionsTextArray=[
        "Wash often. Use soap. 20 seconds. Then dry. ",
        "Eat only well-cooked food",
        "Avoid close contact with animals that are sick",
        "If you are coughing or sneezing, wear a mask and must know how to use it and dispose of it properly",
        "If you have a fever, cough and difficulty breathing seek medical care early",
        "Avoid travel if you have a fever and cough",
        "When coughing and sneezing cover mouth and nose with flexed elbow or tissue"
    ]//To get the right order in the text array, review the name number in each "src/assets/images/icons"

    useEffect(() => {
        setShowLoading(false)
      })


    if( showLoading ) return <Loading/>

    return (
        <Fragment>


            <div className="precautions">
                <h2 className="white-text">Taking Precautions</h2>
                <div className="precautions_content">
                    {
                        precautionsTextArray.map( (itemText,index) => <PrecautionsCard text={itemText} imgNum={index+1} key={index} />)
                    }
                </div>
                <Wavook />
            </div>
        </Fragment>

    )
}

import { useState } from "react";
import data from "./data";
import './style.css'
export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleClick(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);//we are setting the current id which we are clicking and if 
        //we add ternary operator if the already selected variable is equal to data's id then it will be null(get close) else other data id is shown (other answer will be shown)
    }
    function handleMultiSelection(getCurrentId) {

    }
    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
            Enable Multi-Selection
            </button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div onClick={
                            enableMultiSelection 
                            ? () => handleMultiSelection(dataItem.id) 
                            : () => handleSingleClick(dataItem.id)
                            } 
                            className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                            <div>
                                {
                                    selected === dataItem.id ?//when selected variable is equal to data's id
                                        <div className="content">{dataItem.answer}</div>
                                        : null

                                }
                            </div>
                        </div>
                    </div>) :
                    <div>No data found</div>
            }
        </div>
    </div>
}
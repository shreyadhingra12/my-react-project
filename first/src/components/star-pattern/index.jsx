import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css';

export default function StarRating({noOfStars = 5}) {

    const [rating,setRating] = useState(0);//Stores the star value user actually clicked.
    const [hover,setHover]= useState(0);//Stores temporary rating when user moves mouse over stars.

    function handleClick(getCurrentIndex) {//getCurrentIndex is a parameter
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        setHover(rating);
    }
    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_,index)=> {
                index+=1
// Expression	       Meaning	                      Can you map?
// Array(5)	        Empty array with 5 holes	       ❌ No
// [...Array(5)]	Array with 5 undefined values	   ✔️ Yes
// map() always gives two arguments:
// value (each element of the array)
// index (0, 1, 2, 3 …)
// _ → I don’t need this argument
// index → I only want the index
            return <FaStar
                key={index}//React needs a unique key for each star while rendering through map().
                className={index <= (hover || rating) ? 'active' : 'inactive'}//This controls the color of the star.
// If rating = 3
// Active stars → 0,1,2,3
// Inactive stars → 4
                onClick={()=> handleClick(index)}
                onMouseMove={()=> handleMouseEnter(index)}
                onMouseLeave={()=> handleMouseLeave(index)}
                size={40}
            />
        })
        } 
    </div>
}
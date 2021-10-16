import React, { useState } from "react";
import { ImStarFull } from "react-icons/im";
import './FiveStars.css';

const FiveStars = ({ totalStars = 5 }) => {
  const createArray = (length) => [...Array(length)];
  function Star({ selected = false, onSelect }) {
    return <ImStarFull color={selected ? "red" : "#909"} onClick={onSelect} />;
  }
    const [selectedStars, setSelectedStars] = useState(0);
   
  return (
    <div className="star">
          {createArray(totalStars)
              .map((n, i) =>
                (
                <Star
                    Key={i}
                    selected={selectedStars > i} 
                    onSelect={() => setSelectedStars(i + 1)} 
                />
                )
      )}
      <p>
        {selectedStars} Of {totalStars}
      </p>
    </div>
  );
};


export default FiveStars;

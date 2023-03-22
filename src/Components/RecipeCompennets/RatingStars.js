import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

function RatingStars({ stars, onClick, style }) {

    return (
        <div>
            {[...Array(5)].map((_, i) => {
                return <span key={i} onClick={() => onClick(i)} style={style}>
                    {stars > i ? (
                        <AiFillStar fontSize={"15px"} />
                    ) : (
                        <AiOutlineStar fontSize={"15px"} />
                    )}
                </span>
            })}
        </div>
    )
}

export default RatingStars
import React from 'react'

const Card = props => {
    const { img } = props;
    return (
        <div className='card'>
            {img}
        </div>
    )
}

export default Card

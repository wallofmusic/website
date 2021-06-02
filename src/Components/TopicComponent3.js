import React, {useState} from 'react';
import { useSpring, animated} from 'react-spring';
import { navigate } from '@reach/router';
import '../App.css';

const TopicComponent1 = props => {
    const {img} = props;
    const properties = useSpring({opacity: 1, from: {opacity: 0},  config: { duration: 1500}})
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 20, tension: 400, friction: 90 }
    })

    const clickHandler = () => {
        navigate('/photographer')
    }
    return (
        <div onMouseEnter={() => set(state => !state)} onMouseLeave={() => set(state => !state)} onClick={clickHandler}>
            <animated.div class="c3 back3 topic" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
            <animated.div class="c3 front3 topic" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
        </div>
    )
}

export default TopicComponent1
{/* <img src={img} className="Topic"/> */}
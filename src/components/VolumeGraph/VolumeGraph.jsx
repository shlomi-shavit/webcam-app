import React, {useState, useEffect, useRef} from 'react';
import classes from './VolumeGraph.module.scss';

const VolumeGraph = ({ScoreOfMoveArr}) => {

    const [seconds, setSeconds] = useState(0); // seconds
    const [barsArray, setBarsArray] = useState([]); // bars Dom Array
    const graphContainer = useRef(null);

    const volumeBars = ScoreOfMoveArr.map( (bar, index) => (
            <div key={index} style={{height: bar+'px'}} className={`${classes.bar} ${bar > 90 ? classes.full : ''}`}></div>
        )
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1 );
            barsArray.push(volumeBars[seconds])
            graphContainer.current.scrollLeft += 30
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div className={classes.graph_container} ref={graphContainer}>
            <div className={classes.bars_wrapper}>
                {barsArray}
            </div>
        </div>
    )
};

export default VolumeGraph;

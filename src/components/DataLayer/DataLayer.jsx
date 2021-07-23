import React, { useState, useEffect, useMemo } from 'react';
import classes from './DataLayer.module.scss';
import Timer from '../Timer/Timer';
import VolumGraph from '../VolumeGraph/VolumeGraph';
import Score from '../Score/Score';

const DataLayer = ({timer}) => {

    const [seconds, setSeconds] = useState(0);
    const [score, setScore] = useState(0);

    const animationDuration = timer/1000;
    let ScoreOfMoveArr = [];

    while(ScoreOfMoveArr.length < animationDuration){
        const randomNum = Math.floor(Math.random() * 100) + 1;
        if(ScoreOfMoveArr.indexOf(randomNum) === -1) ScoreOfMoveArr.push(randomNum);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1 );
            setScore(ScoreOfMoveArr[seconds]);
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div className={classes.data_layer}>
            <Score score={score} />
            <Timer timer={animationDuration}/>
            <VolumGraph seconds={seconds} ScoreOfMoveArr={ScoreOfMoveArr}/>
        </div>
    );
}

export default DataLayer;
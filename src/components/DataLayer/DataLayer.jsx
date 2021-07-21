import React from 'react';
import classes from './DataLayer.module.scss';
import Timer from '../Timer/Timer';
import VolumGraph from '../VolumeGraph/VolumeGraph';

const Score = ({timer}) => {

    const animationDuration = timer/1000;
    let ScoreOfMoveArr = [];

    while(ScoreOfMoveArr.length < animationDuration){
        const randomNum = Math.floor(Math.random() * 100) + 1;
        if(ScoreOfMoveArr.indexOf(randomNum) === -1) ScoreOfMoveArr.push(randomNum);
    }

    // todo: score component -> ScoreOfMoveArr as prop -> loop with setInterval
    
    return (
        <div className={classes.data_layer}>
            <div className={classes.score}>85</div>
            <Timer timer={animationDuration}/>
            <VolumGraph ScoreOfMoveArr={ScoreOfMoveArr}/>
        </div>
    );
}

export default Score;
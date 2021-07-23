import React from 'react';
import classes from './Score.module.scss';

const Score = ({score}) => {

    return (
        <div className={classes.score}>
            {score}
        </div>
    )
};

export default Score;

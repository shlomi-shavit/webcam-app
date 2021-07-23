import React from 'react';
import classes from './Timer.module.scss';

function Timer({timer}) {

    return (
        <div>
            <div className={classes.timer_wrapper}>
                <div style={{animationDuration: timer+'s'}} className={`${classes.pie} ${classes.spinner}`}></div>
                <div style={{animationDuration: timer+'s'}} className={`${classes.pie} ${classes.filler}`}></div>
                <div style={{animationDuration: timer+'s'}} className={classes.mask}></div>
            </div>
        </div>
    );
}

export default React.memo(Timer);
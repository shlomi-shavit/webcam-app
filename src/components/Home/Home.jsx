import React from 'react';
import { Link } from "react-router-dom";
import classes from './Home.module.scss';

const Home = () => {

    const workoutData = [
        {
            title: 'Cardio',
            url: '/cardio',
            time: '5'
        },
        {
            title: 'Strength',
            url: '/strength',
            time: '4'
        },
        {
            title: 'Flexability',
            url: '/flexability',
            time: '10'
        },
    ];

    const workoutElement = workoutData.map(data => (
            <Link key={data.title} className={`${classes.workout} ${classes[data.title]}`} to={data.url}>
                <div className={classes.workout_time}>
                    <div className={classes.workout_time__symbol}></div>
                    {data.time} min
                </div>
                {data.title}
            </Link>
        )
    )

    return (
        <div className={classes.page_wrapper}>
            <div className={classes.logo}>KEMTAI</div>
            <h2>Choose a short workout</h2>
            {workoutElement}
        </div>
    )
};

export default Home;

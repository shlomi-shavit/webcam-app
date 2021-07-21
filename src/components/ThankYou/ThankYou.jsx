import React from 'react';
import  { Link } from 'react-router-dom';
import classes from './ThankYou.module.scss';

const ThankYou = () => {

    return (
        <div className={classes.page_wrapper}>
            Thank you!
            <Link to={'./'}>
                Back to home page
            </Link>
        </div>
    )
};

export default ThankYou;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Control.css';

const Control = (props) => (
    <div>
        <FontAwesomeIcon className={classes.Icon} icon={props.icon} onClick={props.func} />
    </div>
);

export default Control;

import React from 'react'
import Control from './Control/Control';
import Aux from '../../hoc/Auxiliary';

const Controls = (props) => (
    <Aux>
        {/* Have to know the names of the icons in order to generate the controls */}
        {/* <Control icon="pen-square" func={props.edit} /> */}
        <Control icon="times-circle" func={props.delete} />
    </Aux>
);

export default Controls;
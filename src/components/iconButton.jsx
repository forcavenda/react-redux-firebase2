import React from 'react';
import { Button } from 'reactstrap';

export default props => (
    <Button style={props.style} color={props.color}>
        <i className={'fa fa-'+ props.icon}></i>
    </Button>
)
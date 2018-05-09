import React from 'react';

export default props => (
    <header style={headerStyle}>
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)
const headerStyle = {paddingTop: '40px', paddingBottom: '40px'}
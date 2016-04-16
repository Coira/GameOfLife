import React from 'react';
import classnames from 'classnames';

const Cell = ({id, status}) => (
    <div className={classnames("cell", {"alive":status})}></div>
);

export default Cell;


    

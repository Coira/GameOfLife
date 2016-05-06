import React from 'react';
import classnames from 'classnames';

const Cell = ({id, status, cellClickFtn}) => (
    <div className={classnames("cell", {"alive":status})}
	 onClick={() => cellClickFtn(id)}></div>
);

export default Cell;


    

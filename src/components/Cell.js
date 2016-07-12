import React from 'react';
import classnames from 'classnames';
import {ALIVE} from '../game/board';

class Cell extends React.Component {
    constructor(props) {
	super(props);
    }

    render() {
	const id = this.props.id;
	const status = this.props.cell;
	
	return (
	    <div className={classnames("cell", {"alive": status===ALIVE},
				       this.props.size)}
		 onClick={() => this.props.cellClickFtn(id)}>
	    </div> );
    }
}

export default Cell;


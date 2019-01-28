import React, { Component } from 'react';

class Fave extends Component {


	handleClick = (e) => {
		e.stopPropagation(); /* prevents other/overlapping events from being triggered */
		console.log("handling fave click")
		this.props.onFaveToggle();
	}

	handleClick(e) {
		e.stopPropagation()
		console.log('Handling Fave click!')
		this.props.onFaveToggle()
	}

	render() {
		const queueClass = this.props.isFave ? "remove_from_queue" : "add_to_queue"
		return(
			<div className={`film-row-fave ${queueClass}`} onClick={this.handleClick}>
				<p className="material-icons">{queueClass}</p>
			</div>
			)		
	}
}


export default Fave;
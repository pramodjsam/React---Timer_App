import React from 'react';

export class Time extends React.Component{
	render(){
		return(
			<div className='time-view'>
				<div className='time'>{this.props.time}</div>
			</div>
		)
	}
}

export default Time;
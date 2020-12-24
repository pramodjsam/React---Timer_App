import React from 'react';

class Laps extends React.Component{
	compare(a,b){
		return a-b;
	}
	render(){
		return(
			<div className='laps'>
				{this.props.laps.sort(this.compare).map((lap,index)=>(
					<div className='lap' key={index}>{this.props.formatTime(lap)}</div>
				))}
			</div>
		)
	}
}

export default Laps
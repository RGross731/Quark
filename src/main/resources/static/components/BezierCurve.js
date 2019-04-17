class BezierCurve extends React.Component {
	constructor(props) {
		super(props);
		this.state = {startPoint: {x: 32, y: 32}, controlPoint: {x: 100, y: 168}, endPoint: {x: 168, y: 32}, draggingHandle: null, xOffset: 0, yOffset: 0, cursor: '-webkit-grab'};
	}
	
	handleMouseDown = (e, draggingHandle) => {
		this.setState({draggingHandle: draggingHandle, xOffset: e.pageX - this.state[draggingHandle].x, yOffset: e.pageY - this.state[draggingHandle].y, cursor: '-webkit-grabbing'});
	}
	
	handleMouseMove = (e) => {
		this.setState({[this.state.draggingHandle]: {x: e.pageX - this.state.xOffset, y: e.pageY - this.state.yOffset}});
	}
	
	handleMouseUp = (e) => {
		this.setState({draggingHandle: null, cursor: '-webkit-grab'});
	}
	
	render() {
		return (
			<div className="panel"> 
				<svg viewBox="0 0 200 200" onMouseMove={this.state.draggingHandle ? this.handleMouseMove : undefined} onMouseUp={this.state.draggingHandle ? this.handleMouseUp : undefined}>
					<Line from={this.state.controlPoint} to={this.state.startPoint}/>
					<Line from={this.state.controlPoint} to={this.state.endPoint}/>
					<Curve commands={`M ${this.state.startPoint.x} ${this.state.startPoint.y} Q ${this.state.controlPoint.x} ${this.state.controlPoint.y} ${this.state.endPoint.x} ${this.state.endPoint.y}`}/>
					<Handle coordinates={this.state.startPoint} onMouseDown={(e) => this.handleMouseDown(e, 'startPoint')} cursor={this.state.cursor} fill={"#33bbff"} size={8}/>
					<Handle coordinates={this.state.endPoint} onMouseDown={(e) => this.handleMouseDown(e, 'endPoint')} cursor={this.state.cursor} fill={"#33bbff"} size={8}/>
					<Handle coordinates={this.state.controlPoint} onMouseDown={(e) => this.handleMouseDown(e, 'controlPoint')} cursor={this.state.cursor} fill={"#e9ecef"} size={4}/>
		    	</svg>
		  	</div>
		);
	}
}
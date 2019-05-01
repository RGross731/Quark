class BezierCurve extends React.Component {
	constructor(props) {
		super(props);
		this.state = {startPoint: {x: 32, y: 32}, controlPoint: {x: 100, y: 168}, endPoint: {x: 168, y: 32}, draggingAnchor: null, xOffset: 0, yOffset: 0, cursor: '-webkit-grab'};
	}
	
	handleMouseDown = (e, draggingAnchor) => {
		this.setState({draggingAnchor: draggingAnchor, xOffset: e.pageX - this.state[draggingAnchor].x, yOffset: e.pageY - this.state[draggingAnchor].y, cursor: '-webkit-grabbing'});
	}
	
	handleMouseMove = (e) => {
		this.setState({[this.state.draggingAnchor]: {x: e.pageX - this.state.xOffset, y: e.pageY - this.state.yOffset}});
	}
	
	handleMouseUp = (e) => {
		this.setState({draggingAnchor: null, cursor: '-webkit-grab'});
	}
	
	render() {
		return (
			<div className="panel1"> 
				<svg viewBox="0 0 200 200" onMouseMove={this.state.draggingAnchor ? this.handleMouseMove : undefined} onMouseUp={this.state.draggingAnchor ? this.handleMouseUp : undefined}>
					<Line from={this.state.controlPoint} to={this.state.startPoint}/>
					<Line from={this.state.controlPoint} to={this.state.endPoint}/>
					<Curve commands={`M ${this.state.startPoint.x} ${this.state.startPoint.y} Q ${this.state.controlPoint.x} ${this.state.controlPoint.y} ${this.state.endPoint.x} ${this.state.endPoint.y}`}/>
					<Anchor coordinates={this.state.startPoint} onMouseDown={(e) => this.handleMouseDown(e, 'startPoint')} cursor={this.state.cursor} fill={"#33bbff"} size={8}/>
					<Anchor coordinates={this.state.endPoint} onMouseDown={(e) => this.handleMouseDown(e, 'endPoint')} cursor={this.state.cursor} fill={"#33bbff"} size={8}/>
					<Anchor coordinates={this.state.controlPoint} onMouseDown={(e) => this.handleMouseDown(e, 'controlPoint')} cursor={this.state.cursor} fill={"#e9ecef"} size={4}/>
		    	</svg>
		  	</div>
		);
	}
}
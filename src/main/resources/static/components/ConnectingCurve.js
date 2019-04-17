class ConnectingCurve extends React.Component {
	constructor(props) {
		super(props);
		this.state = {leftPoint: {x: 32, y: 50}, rightPoint: {x: 168, y: 150}, startPoint: {x: 0, y: 0}, endPoint: {x: 0, y: 0}, dragging: false, offset: {x: 0, y: 0}, cursor: '-webkit-grab'};
	}
	
	handleMouseDown = (e, draggingHandle) => {
		this.setState({startPoint: this.state[draggingHandle], endPoint: this.state[draggingHandle], dragging: true, offset: {x: e.pageX - this.state[draggingHandle].x, y: e.pageY - this.state[draggingHandle].y}, cursor: '-webkit-grabbing'});
	}
	
	handleMouseMove = (e) => {
		this.setState({endPoint: {x: e.pageX - this.state.offset.x, y: e.pageY - this.state.offset.y}});
	}
	
	handleMouseUp = (e) => {
		this.setState({dragging: false, cursor: '-webkit-grab'});
	}
	
	render() {
		return (
			<div className="panel"> 
				<svg viewBox="0 0 200 200" onMouseMove={this.state.dragging ? this.handleMouseMove : undefined} cursor={this.state.dragging ? this.state.cursor : undefined}>
					<Handle coordinates={this.state.leftPoint} onMouseDown={(e) => this.handleMouseDown(e, 'leftPoint')} onMouseUp={this.state.dragging ? this.handleMouseUp : undefined} cursor={this.state.cursor} fill={"#e9ecef"} size={8}/>
					<Handle coordinates={this.state.rightPoint} onMouseDown={(e) => this.handleMouseDown(e, 'rightPoint')} onMouseUp={this.state.dragging ? this.handleMouseUp : undefined} cursor={this.state.cursor} fill={"#e9ecef"} size={8}/>
					{this.state.dragging && <Curve commands={`M ${this.state.startPoint.x} ${this.state.startPoint.y} C ${(this.state.startPoint.x + this.state.endPoint.x) / 2} ${this.state.startPoint.y} ${(this.state.startPoint.x + this.state.endPoint.x) / 2} ${this.state.endPoint.y} ${this.state.endPoint.x} ${this.state.endPoint.y}`}/>}
		    	</svg>
		  	</div>
		);
	}
}
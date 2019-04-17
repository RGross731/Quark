class ConnectingCurve extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				handles: {left: {x: 32, y: 50, h: false}, right: {x: 168, y: 150, h: false}},
				cursor: '-webkit-grab'
		};
	}
	
	handleMouseDown = (e, draggingHandle) => {
		this.setState({finalCurve: undefined, curve: {startHandle: draggingHandle, cursorPoint: this.state.handles[draggingHandle], offset: {x: e.pageX - this.state.handles[draggingHandle].x, y: e.pageY - this.state.handles[draggingHandle].y}}, cursor: '-webkit-grabbing'});
	}
	
	handleMouseMove = (e) => {
		this.setState({curve: {startHandle: this.state.curve.startHandle, cursorPoint: {x: e.pageX - this.state.curve.offset.x, y: e.pageY - this.state.curve.offset.y}, offset: this.state.curve.offset}});
	}
	
	handleMouseUp = (e) => {
		this.setState({curve: undefined, cursor: '-webkit-grab'});
	}
	
	handleMouseUpHandle = (e, draggingHandle) => {
		if (this.state.curve.startHandle === draggingHandle) {
			this.setState({curve: undefined, cursor: '-webkit-grab'});
		} else {
			this.setState({finalCurve: {startHandle: this.state.curve.startHandle, endHandle: draggingHandle}, curve: undefined, cursor: '-webkit-grab'});
		}
	}
	
	handleMouseEnter = (e, draggingHandle) => {
		if (this.state.curve.startHandle !== draggingHandle) {
			this.setState({handles: {left: {x: 32, y: 50, h: true}, right: {x: 168, y: 150, h: true}}});
		}
	}
	
	handleMouseLeave = (e) => {
		this.setState({handles: {left: {x: 32, y: 50, h: false}, right: {x: 168, y: 150, h: false}}});
	}
	
	render() {
		return (
			<div className="panel2"> 
				<svg viewBox="0 0 200 200" onMouseMove={this.state.curve ? this.handleMouseMove : undefined} onMouseUp={this.state.curve ? this.handleMouseUp : undefined} cursor={this.state.curve ? this.state.cursor : undefined}>
					{this.state.curve && <Curve commands={`M ${this.state.handles[this.state.curve.startHandle].x} ${this.state.handles[this.state.curve.startHandle].y} C ${(this.state.handles[this.state.curve.startHandle].x + this.state.curve.cursorPoint.x) / 2} ${this.state.handles[this.state.curve.startHandle].y} ${(this.state.handles[this.state.curve.startHandle].x + this.state.curve.cursorPoint.x) / 2} ${this.state.curve.cursorPoint.y} ${this.state.curve.cursorPoint.x} ${this.state.curve.cursorPoint.y}`}/>}
					{this.state.finalCurve && <Curve commands={`M ${this.state.handles[this.state.finalCurve.startHandle].x} ${this.state.handles[this.state.finalCurve.startHandle].y} C ${(this.state.handles[this.state.finalCurve.startHandle].x + this.state.handles[this.state.finalCurve.endHandle].x) / 2} ${this.state.handles[this.state.finalCurve.startHandle].y} ${(this.state.handles[this.state.finalCurve.startHandle].x + this.state.handles[this.state.finalCurve.endHandle].x) / 2} ${this.state.handles[this.state.finalCurve.endHandle].y} ${this.state.handles[this.state.finalCurve.endHandle].x} ${this.state.handles[this.state.finalCurve.endHandle].y}`}/>}	
					<Handle coordinates={this.state.handles.left} onMouseDown={(e) => this.handleMouseDown(e, 'left')} onMouseUp={this.state.curve ? (e) => this.handleMouseUpHandle(e, 'left') : undefined} onMouseEnter={this.state.curve ? (e) => this.handleMouseEnter(e, 'left') : undefined} onMouseLeave={this.state.curve ? this.handleMouseLeave : undefined} cursor={this.state.cursor} fill={this.state.handles.left.h ? "#33bbff" : "#e9ecef"} size={8}/>
					<Handle coordinates={this.state.handles.right} onMouseDown={(e) => this.handleMouseDown(e, 'right')} onMouseUp={this.state.curve ? (e) => this.handleMouseUpHandle(e, 'right') : undefined} onMouseEnter={this.state.curve ? (e) => this.handleMouseEnter(e, 'right') : undefined} onMouseLeave={this.state.curve ? this.handleMouseLeave : undefined} cursor={this.state.cursor} fill={this.state.handles.right.h ? "#33bbff" : "#e9ecef"} size={8}/>
		    	</svg>
		  	</div>
		);
	}
}
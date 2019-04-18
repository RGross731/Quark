class ConnectingCurve extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				anchors: {left: {x: 32, y: 50, h: false}, right: {x: 168, y: 150, h: false}},
				cursor: '-webkit-grab'
		};
	}
	
	handleMouseDown = (e, draggingAnchor) => {
		this.setState({finalCurve: undefined, curve: {startAnchor: draggingAnchor, cursorPoint: this.state.anchors[draggingAnchor], offset: {x: e.pageX - this.state.anchors[draggingAnchor].x, y: e.pageY - this.state.anchors[draggingAnchor].y}}, cursor: '-webkit-grabbing'});
	}
	
	handleMouseMove = (e) => {
		this.setState({curve: {startAnchor: this.state.curve.startAnchor, cursorPoint: {x: e.pageX - this.state.curve.offset.x, y: e.pageY - this.state.curve.offset.y}, offset: this.state.curve.offset}});
	}
	
	handleMouseUp = (e) => {
		this.setState({curve: undefined, cursor: '-webkit-grab'});
	}
	
	handleMouseUpAnchor = (e, draggingAnchor) => {
		if (this.state.curve.startAnchor === draggingAnchor) {
			this.setState({curve: undefined, cursor: '-webkit-grab'});
		} else {
			this.setState({finalCurve: {startAnchor: this.state.curve.startAnchor, endAnchor: draggingAnchor}, curve: undefined, cursor: '-webkit-grab'});
		}
	}
	
	handleMouseEnter = (e, draggingAnchor) => {
		if (this.state.curve.startAnchor !== draggingAnchor) {
			this.setState({anchors: {left: {x: 32, y: 50, h: true}, right: {x: 168, y: 150, h: true}}});
		}
	}
	
	handleMouseLeave = (e) => {
		this.setState({anchors: {left: {x: 32, y: 50, h: false}, right: {x: 168, y: 150, h: false}}});
	}
	
	render() {
		return (
			<div className="panel2"> 
				<svg viewBox="0 0 200 200" onMouseMove={this.state.curve ? this.handleMouseMove : undefined} onMouseUp={this.state.curve ? this.handleMouseUp : undefined} cursor={this.state.curve ? this.state.cursor : undefined}>
					{this.state.curve && <Curve commands={`M ${this.state.anchors[this.state.curve.startAnchor].x} ${this.state.anchors[this.state.curve.startAnchor].y} C ${(this.state.anchors[this.state.curve.startAnchor].x + this.state.curve.cursorPoint.x) / 2} ${this.state.anchors[this.state.curve.startAnchor].y} ${(this.state.anchors[this.state.curve.startAnchor].x + this.state.curve.cursorPoint.x) / 2} ${this.state.curve.cursorPoint.y} ${this.state.curve.cursorPoint.x} ${this.state.curve.cursorPoint.y}`}/>}
					{this.state.finalCurve && <Curve commands={`M ${this.state.anchors[this.state.finalCurve.startAnchor].x} ${this.state.anchors[this.state.finalCurve.startAnchor].y} C ${(this.state.anchors[this.state.finalCurve.startAnchor].x + this.state.anchors[this.state.finalCurve.endAnchor].x) / 2} ${this.state.anchors[this.state.finalCurve.startAnchor].y} ${(this.state.anchors[this.state.finalCurve.startAnchor].x + this.state.anchors[this.state.finalCurve.endAnchor].x) / 2} ${this.state.anchors[this.state.finalCurve.endAnchor].y} ${this.state.anchors[this.state.finalCurve.endAnchor].x} ${this.state.anchors[this.state.finalCurve.endAnchor].y}`}/>}	
					<Anchor coordinates={this.state.anchors.left} onMouseDown={(e) => this.handleMouseDown(e, 'left')} onMouseUp={this.state.curve ? (e) => this.handleMouseUpAnchor(e, 'left') : undefined} onMouseEnter={this.state.curve ? (e) => this.handleMouseEnter(e, 'left') : undefined} onMouseLeave={this.state.curve ? this.handleMouseLeave : undefined} cursor={this.state.cursor} fill={this.state.anchors.left.h ? "#33bbff" : "#e9ecef"} size={8}/>
					<Anchor coordinates={this.state.anchors.right} onMouseDown={(e) => this.handleMouseDown(e, 'right')} onMouseUp={this.state.curve ? (e) => this.handleMouseUpAnchor(e, 'right') : undefined} onMouseEnter={this.state.curve ? (e) => this.handleMouseEnter(e, 'right') : undefined} onMouseLeave={this.state.curve ? this.handleMouseLeave : undefined} cursor={this.state.cursor} fill={this.state.anchors.right.h ? "#33bbff" : "#e9ecef"} size={8}/>
		    	</svg>
		  	</div>
		);
	}
}
class DraggableBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {x: 100, y: 400, xOffset: 0, yOffset: 0, dragging: false, cursor: '-webkit-grab'};
	}
	
	handleMouseDown = (e) => {
		e.preventDefault();
		this.setState({xOffset: e.pageX - this.state.x, yOffset: e.pageY - this.state.y, dragging: true, cursor: '-webkit-grabbing'});
	}
	
	handleMouseMove = (e) => {
		this.setState({x: e.pageX - this.state.xOffset, y: e.pageY - this.state.yOffset});
	}
	
	handleMouseUp = (e) => {
		this.setState({dragging: false, cursor: '-webkit-grab'});
	}
	
	render() {
		return (
			<div className="draggable-box" style={{left: this.state.x, top: this.state.y}}>
				<div className="panel-header" draggable onMouseDown={this.handleMouseDown} onMouseMove={this.state.dragging ? this.handleMouseMove : undefined} onMouseUp={this.state.dragging ? this.handleMouseUp : undefined} style={{cursor:this.state.cursor}}>
					Sample Object
				</div>
				<svg viewBox="0 0 200 300">
					<ellipse cx={184} cy={32} rx={8} ry={8} fill="rgb(0,0,0)" stroke="rgb(255,255,255" strokeWidth={2}/>
				</svg>
			</div>
		);
	}
}
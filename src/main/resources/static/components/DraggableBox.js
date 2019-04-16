class DraggableBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {x: 100, y: 100, xOffset: 0, yOffset: 0, cursor: '-webkit-grab'};
	}
	
	onMouseDown = (e) => {
		console.log('drag start');
		e.preventDefault();
		this.setState({xOffset: e.pageX - this.state.x, yOffset: e.pageY - this.state.y, cursor: '-webkit-grabbing'});
		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mouseup', this.onMouseUp);
	}
	
	onMouseMove = (e) => {
		console.log('dragging: ' + e.pageX + ', ' + e.pageY);
		this.setState({x: e.pageX - this.state.xOffset, y: e.pageY - this.state.yOffset});
	}
	
	onMouseUp = (e) => {
		console.log('drag end');
		this.setState({cursor: '-webkit-grab'});
		document.removeEventListener('mousemove', this.onMouseMove);
		document.removeEventListener('mouseup', this.onMouseUp);
	}
	
	render() {
		return (
			<div className="draggable-box" style={{left: this.state.x, top: this.state.y}}>
				<div className="panel-header" draggable onMouseDown={this.onMouseDown} style={{cursor:this.state.cursor}}>
					Sample Object
				</div>
				<svg viewBox="0 0 200 300">
					<ellipse cx={184} cy={32} rx={8} ry={8} fill="rgb(0,0,0)" stroke="rgb(255,255,255" strokeWidth={2}/>
				</svg>
			</div>
		);
	}
}
class DrawableCurve extends React.Component {
	constructor(props) {
		super(props);
		this.state = {drag: false, start: {x: 0, y: 0}, cursor: {x: 0, y: 0}};
	}
	
	handleMouseDown = (e) => {
		this.setState({drag: true, start: {x: e.pageX - e.target.getBoundingClientRect().left, y: e.pageY - e.target.getBoundingClientRect().top}, cursor: {x: e.pageX - e.target.getBoundingClientRect().left, y: e.pageY - e.target.getBoundingClientRect().top}});
	}
	
	handleMouseMove = (e) => {
		this.setState({cursor: {x: e.pageX - e.target.getBoundingClientRect().left, y: e.pageY - e.target.getBoundingClientRect().top}});
	}
	
	handleMouseUp = (e) => {
		this.setState({drag: false});
	}
	
	render() {
		const startP = this.state.start;
		const startCP = {x: (this.state.start.x + this.state.cursor.x) / 2, y: this.state.start.y};
		const endCP = {x: (this.state.start.x + this.state.cursor.x) / 2, y: this.state.cursor.y};
		const endP = this.state.cursor;
		const commands = `M ${startP.x} ${startP.y} C ${startCP.x} ${startCP.y} ${endCP.x} ${endCP.y} ${endP.x} ${endP.y}`;
		console.log(startP.x + " " + startP.y + " " + startCP.x + " " + startCP.y + " " + endCP.x + " " + endCP.y + " " + endP.x + " " + endP.y);
		return (
			<div className="panel4"> 
				<svg viewBox="0 0 200 200" onMouseDown={this.handleMouseDown} onMouseMove={this.state.drag ? this.handleMouseMove : undefined} onMouseUp={this.state.drag ? this.handleMouseUp : undefined}>
					{this.state.drag && <Curve commands={commands}/>}
		    	</svg>
		  	</div>
		);
	}
}
class QuarkApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {width: 0, height: 0, drag: false, start: {x: 0, y: 0}, cursor: {x: 0, y: 0}};
	}
	
	componentDidMount = () => {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount= () => {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({width: window.innerWidth, height: window.innerHeight});
	}
	
	handleMouseDown = (e) => {
		e.preventDefault();
		this.setState({drag: true, start: {x: e.pageX, y: e.pageY}, cursor: {x: e.pageX, y: e.pageY}});
	}
	
	handleMouseMove = (e) => {
		this.setState({cursor: {x: e.pageX, y: e.pageY}});
	}
	
	handleMouseUp = (e) => {
		this.setState({drag: false});
	}
	
	handleAnchorMouseUp = (e) => {
		console.log("YEEHAW");
		this.setState({drag: false});
		this.setState({curve: {start: this.state.start, end: this.state.cursor}});
	}
	
	render() {
		const startP = this.state.start;
		const startCP = {x: (this.state.start.x + this.state.cursor.x) / 2, y: this.state.start.y};
		const endCP = {x: (this.state.start.x + this.state.cursor.x) / 2, y: this.state.cursor.y};
		const endP = this.state.cursor;
		const commands = `M ${startP.x} ${startP.y} C ${startCP.x} ${startCP.y} ${endCP.x} ${endCP.y} ${endP.x} ${endP.y}`;
		
		return (
			<div onMouseMove={this.state.drag ? this.handleMouseMove : undefined} onMouseUp={this.state.drag ? this.handleMouseUp : undefined}>
				<svg viewBox={`0 0 ${this.state.width} ${this.state.height}`}>
					{this.state.drag && <Curve commands={commands}/>}
					{this.state.curve && <Curve commands={`M ${this.state.curve.start.x} ${this.state.curve.start.y} C ${(this.state.curve.start.x + this.state.curve.end.x) / 2} ${this.state.curve.start.y} ${(this.state.curve.start.x + this.state.curve.end.x) / 2} ${this.state.curve.end.y} ${this.state.curve.end.x} ${this.state.curve.end.y}`}/>}
				</svg>
				<Request x={100} y={200} onAnchorMouseDown={this.handleMouseDown} onAnchorMouseUp={this.handleAnchorMouseUp}/>
				<PostMapping x={400} y={200} onAnchorMouseDown={this.handleMouseDown} onAnchorMouseUp={this.handleAnchorMouseUp}/>
			</div>
		);
	}
}
class QuarkApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {width: 0, height: 0, drag: false, start: {x: 0, y: 0}, cursor: {x: 0, y: 0}};
	}
	
	handleMouseDown = (e) => {
		this.setState({drag: true, start: {x: e.pageX, y: e.pageY}, cursor: {x: e.pageX, y: e.pageY}});
	}
	
	handleMouseMove = (e) => {
		this.setState({cursor: {x: e.pageX, y: e.pageY}});
	}
	
	handleMouseUp = (e) => {
		this.setState({drag: false});
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
	
	render() {
		const startP = this.state.start;
		const startCP = {x: (this.state.start.x + this.state.cursor.x) / 2, y: this.state.start.y};
		const endCP = {x: (this.state.start.x + this.state.cursor.x) / 2, y: this.state.cursor.y};
		const endP = this.state.cursor;
		const commands = `M ${startP.x} ${startP.y} C ${startCP.x} ${startCP.y} ${endCP.x} ${endCP.y} ${endP.x} ${endP.y}`;
		
		return (
			<div>
				<svg viewBox={`0 0 ${this.state.width} ${this.state.height}`} onMouseDown={this.handleMouseDown} onMouseMove={this.state.drag ? this.handleMouseMove : undefined} onMouseUp={this.state.drag ? this.handleMouseUp : undefined}>
					{this.state.drag && <Curve commands={commands}/>}
				</svg>
				{/*
				<BezierCurve />
				<ConnectingCurve />
				<DraggableCurve />
				<DrawableCurve />
				<DraggableBox />
				*/}
			</div>
		);
	}
}
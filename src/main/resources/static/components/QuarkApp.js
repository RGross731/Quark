class QuarkApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			window: {
				width: 0, 
				height: 0
			},
			requestPanel: {
				x: 100, 
				y: 200
			}, 
			postMappingPanel: {
				x: 400, 
				y: 200
			},
			input: {
				drag: false, 
				start: {
					x: 0, 
					y: 0
				}, 
				cursor: {
					x: 0, 
					y: 0
				}, 
				offset: {
					x: 0, 
					y: 0
				}
			}
		};
	}
	
	componentDidMount = () => {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount= () => {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({window: {width: window.innerWidth, height: window.innerHeight}});
	}
	
	handlePanelMouseDown = (e, panel) => {
		e.preventDefault();
		this.setState({xOffset: e.pageX - this.state.x, yOffset: e.pageY - this.state.y, dragging: true, cursor: '-webkit-grabbing'});
	}
	
	handleMouseDown = (e) => {
		e.preventDefault();
		this.setState({input: {drag: true, start: {x: e.pageX, y: e.pageY}, cursor: {x: e.pageX, y: e.pageY}, offset: {x: 0, y: 0}}});
	}
	
	handleMouseMove = (e) => {
		this.setState({input: {drag: true, start: {x: this.state.input.start.x, y: this.state.input.start.y}, cursor: {x: e.pageX, y: e.pageY}, offset: {x: 0, y: 0}}});
	}
	
	handleMouseUp = (e) => {
		this.setState({input: {drag: false, start: {x: 0, y: 0}, cursor: {x: 0, y: 0}, offset: {x: 0, y: 0}}});
	}
	
	handleAnchorMouseUp = (e) => {
		console.log("YEEHAW");
		this.setState({input: {drag: false, start: {x: 0, y: 0}, cursor: {x: 0, y: 0}, offset: {x: 0, y: 0}}});
		this.setState({curve: {start: this.state.input.start, end: this.state.input.cursor}});
	}
	
	render() {
		const startP = this.state.input.start;
		const startCP = {x: (this.state.input.start.x + this.state.input.cursor.x) / 2, y: this.state.input.start.y};
		const endCP = {x: (this.state.input.start.x + this.state.input.cursor.x) / 2, y: this.state.input.cursor.y};
		const endP = this.state.input.cursor;
		const commands = `M ${startP.x} ${startP.y} C ${startCP.x} ${startCP.y} ${endCP.x} ${endCP.y} ${endP.x} ${endP.y}`;
		
		return (
			<div onMouseMove={this.state.input.drag ? this.handleMouseMove : undefined} onMouseUp={this.state.input.drag ? this.handleMouseUp : undefined}>
				<svg viewBox={`0 0 ${this.state.window.width} ${this.state.window.height}`}>
					{this.state.input.drag && <Curve commands={commands}/>}
					{this.state.curve && <Curve commands={`M ${this.state.curve.start.x} ${this.state.curve.start.y} C ${(this.state.curve.start.x + this.state.curve.end.x) / 2} ${this.state.curve.start.y} ${(this.state.curve.start.x + this.state.curve.end.x) / 2} ${this.state.curve.end.y} ${this.state.curve.end.x} ${this.state.curve.end.y}`}/>}
				</svg>
				<Request x={this.state.requestPanel.x} y={this.state.requestPanel.y} onAnchorMouseDown={this.handleMouseDown} onAnchorMouseUp={this.handleAnchorMouseUp}/>
				<PostMapping x={this.state.postMappingPanel.x} y={this.state.postMappingPanel.y} onAnchorMouseDown={this.handleMouseDown} onAnchorMouseUp={this.handleAnchorMouseUp}/>
			</div>
		);
	}
}
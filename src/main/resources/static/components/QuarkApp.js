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
					y: 0,
					icon: 'auto'
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
	
	updatePanel = (panel, details) => {
		this.setState({[panel]: details});
	}
	
	handleMouseDown = (e) => {
		e.preventDefault();
		this.setState({input: {...this.state.input, drag: true, start: {x: e.pageX, y: e.pageY}, cursor: {x: e.pageX, y: e.pageY}}});
	}
	
	handleMouseMove = (e) => {
		this.setState({input: {...this.state.input, cursor: {x: e.pageX, y: e.pageY}}});
	}
	
	handleMouseUp = (e) => {
		this.setState({input: {...this.state.input, drag: false}});
	}
	
	handleAnchorMouseUp = (e) => {
		this.setState({input: {...this.state.input, drag: false}, curve: {start: {x: this.state.input.start.x - this.state.requestPanel.x, y: this.state.input.start.y - this.state.requestPanel.y }, end: {x: this.state.input.cursor.x - this.state.postMappingPanel.x, y: this.state.input.cursor.y - this.state.postMappingPanel.y }}});
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
					{this.state.curve && <Curve commands={`M ${this.state.curve.start.x + this.state.requestPanel.x} ${this.state.curve.start.y + this.state.requestPanel.y} C ${(this.state.curve.start.x  + this.state.requestPanel.x + this.state.curve.end.x  + this.state.postMappingPanel.x) / 2} ${this.state.curve.start.y + this.state.requestPanel.y} ${(this.state.curve.start.x  + this.state.requestPanel.x + this.state.curve.end.x  + this.state.postMappingPanel.x) / 2} ${this.state.curve.end.y + this.state.postMappingPanel.y} ${this.state.curve.end.x + this.state.postMappingPanel.x} ${this.state.curve.end.y + this.state.postMappingPanel.y}`}/>}
				</svg>
				<Request details={this.state.requestPanel} updatePanel={this.updatePanel} onAnchorMouseDown={this.handleMouseDown} onAnchorMouseUp={this.handleAnchorMouseUp}/>
				<PostMapping details={this.state.postMappingPanel} updatePanel={this.updatePanel} onAnchorMouseDown={this.handleMouseDown} onAnchorMouseUp={this.handleAnchorMouseUp}/>
			</div>
		);
	}
}
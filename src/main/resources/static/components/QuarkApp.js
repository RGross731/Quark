class QuarkApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			window: {
				width: 0, 
				height: 0
			},
			requestPanel: {
				id: 'requestPanel',
				x: 100, 
				y: 200
			}, 
			postMappingPanel: {
				id: 'postMappingPanel',
				x: 400, 
				y: 200
			},
			input: {
				drag: false,
				startPanel: null,
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
	
	handleAnchorMouseDown = (e, panel) => {
		e.preventDefault();
		this.setState({input: {...this.state.input, drag: true, startPanel: panel, start: {x: e.target.getBoundingClientRect().left + 6, y: e.target.getBoundingClientRect().top + 6}, cursor: {x: e.pageX, y: e.pageY}}});
	}
	
	handleMouseMove = (e) => {
		this.setState({input: {...this.state.input, cursor: {x: e.pageX, y: e.pageY}}});
	}
	
	handleMouseUp = (e) => {
		this.setState({input: {...this.state.input, drag: false}});
	}
	
	handleAnchorMouseUp = (e, panel) => {
		if (panel == this.state.input.startPanel) {
			this.setState({input: {...this.state.input, drag: false}});
		} else {
			this.setState({input: {...this.state.input, drag: false}, curve: {start: {panel: this.state.input.startPanel, x: this.state.input.start.x - this.state[this.state.input.startPanel].x, y: this.state.input.start.y - this.state[this.state.input.startPanel].y }, end: {panel: panel, x: e.target.getBoundingClientRect().left + 6 - this.state[panel].x, y: e.target.getBoundingClientRect().top + 6 - this.state[panel].y}}});
		}
	}
	
	render() {
		const startP = this.state.input.start;
		const startCP = {x: (this.state.input.start.x + this.state.input.cursor.x) / 2, y: this.state.input.start.y};
		const endCP = {x: (this.state.input.start.x + this.state.input.cursor.x) / 2, y: this.state.input.cursor.y};
		const endP = this.state.input.cursor;
		const commands = `M ${startP.x} ${startP.y} C ${startCP.x} ${startCP.y} ${endCP.x} ${endCP.y} ${endP.x} ${endP.y}`;
		
		return (
			<div onMouseMove={this.state.input.drag ? this.handleMouseMove : undefined} onMouseUp={this.state.input.drag ? this.handleMouseUp : undefined}>
				<Request details={this.state.requestPanel} updatePanel={this.updatePanel} onAnchorMouseDown={this.handleAnchorMouseDown} onAnchorMouseUp={this.handleAnchorMouseUp}/>
				<PostMapping details={this.state.postMappingPanel} updatePanel={this.updatePanel} onAnchorMouseDown={this.handleAnchorMouseDown} onAnchorMouseUp={this.handleAnchorMouseUp}/>
				<svg viewBox={`0 0 ${this.state.window.width} ${this.state.window.height}`}>
					{this.state.input.drag && <Curve commands={commands}/>}
					{this.state.curve && <Curve commands={`M ${this.state.curve.start.x + this.state[this.state.curve.start.panel].x} ${this.state.curve.start.y + this.state[this.state.curve.start.panel].y} C ${(this.state.curve.start.x  + this.state[this.state.curve.start.panel].x + this.state.curve.end.x  + this.state[this.state.curve.end.panel].x) / 2} ${this.state.curve.start.y + this.state[this.state.curve.start.panel].y} ${(this.state.curve.start.x  + this.state[this.state.curve.start.panel].x + this.state.curve.end.x  + this.state[this.state.curve.end.panel].x) / 2} ${this.state.curve.end.y + this.state[this.state.curve.end.panel].y} ${this.state.curve.end.x + this.state[this.state.curve.end.panel].x} ${this.state.curve.end.y + this.state[this.state.curve.end.panel].y}`}/>}
				</svg>
			</div>
		);
	}
}
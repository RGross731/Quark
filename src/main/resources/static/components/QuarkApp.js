class QuarkApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			window: {
				width: 0, 
				height: 0
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
					y: 0
				}, 
				offset: {
					x: 0, 
					y: 0
				}
			},
			panels: {
				jv3f4ksn: {
					archetype: Request,
					x: 100, 
					y: 200
				}, 
				jv3f4kt0: {
					archetype: PostMapping,
					x: 400, 
					y: 200
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
	
	updatePanel = (id, panel) => {
		this.setState({panels: {...this.state.panels, [id]: panel}});
	}
	
	handleAnchorMouseDown = (e, anchor) => {
		e.preventDefault();
		this.setState({input: {...this.state.input, drag: true, startPanel: anchor.id, start: {x: e.target.getBoundingClientRect().left + 6, y: e.target.getBoundingClientRect().top + 6}, cursor: {x: e.pageX, y: e.pageY}}});
	}
	
	handleMouseMove = (e) => {
		this.setState({input: {...this.state.input, cursor: {x: e.pageX, y: e.pageY}}});
	}
	
	handleMouseUp = (e) => {
		this.setState({input: {...this.state.input, drag: false}});
	}
	
	handleAnchorMouseUp = (e, anchor) => {
		if (anchor.id == this.state.input.startPanel) {
			this.setState({input: {...this.state.input, drag: false}});
		} else {
			this.setState({input: {...this.state.input, drag: false}, curve: {start: {panel: this.state.input.startPanel, x: this.state.input.start.x - this.state.panels[this.state.input.startPanel].x, y: this.state.input.start.y - this.state.panels[this.state.input.startPanel].y }, end: {panel: anchor.id, x: e.target.getBoundingClientRect().left + 6 - this.state.panels[anchor.id].x, y: e.target.getBoundingClientRect().top + 6 - this.state.panels[anchor.id].y}}});
		}
	}
	
	render() {
		const startP = this.state.input.start;
		const startCP = {x: (this.state.input.start.x + this.state.input.cursor.x) / 2, y: this.state.input.start.y};
		const endCP = {x: (this.state.input.start.x + this.state.input.cursor.x) / 2, y: this.state.input.cursor.y};
		const endP = this.state.input.cursor;
		const commands = `M ${startP.x} ${startP.y} C ${startCP.x} ${startCP.y} ${endCP.x} ${endCP.y} ${endP.x} ${endP.y}`;
		
		//console.log(Date.now().toString(36));
		
		return (
			<div onMouseMove={this.state.input.drag ? this.handleMouseMove : undefined} onMouseUp={this.state.input.drag ? this.handleMouseUp : undefined}>
				{Object.keys(this.state.panels).map(key => {
					const panel = this.state.panels[key];
					const Archetype = panel.archetype;
					return <Archetype key={key} id={key} panel={panel} updatePanel={this.updatePanel} onAnchorMouseDown={this.handleAnchorMouseDown} onAnchorMouseUp={this.handleAnchorMouseUp}/>;
				})}
				<svg viewBox={`0 0 ${this.state.window.width} ${this.state.window.height}`}>
					{this.state.input.drag && <Curve commands={commands}/>}
					{this.state.curve && <Curve commands={`M ${this.state.curve.start.x + this.state.panels[this.state.curve.start.panel].x} ${this.state.curve.start.y + this.state.panels[this.state.curve.start.panel].y} C ${(this.state.curve.start.x  + this.state.panels[this.state.curve.start.panel].x + this.state.curve.end.x  + this.state.panels[this.state.curve.end.panel].x) / 2} ${this.state.curve.start.y + this.state.panels[this.state.curve.start.panel].y} ${(this.state.curve.start.x  + this.state.panels[this.state.curve.start.panel].x + this.state.curve.end.x  + this.state.panels[this.state.curve.end.panel].x) / 2} ${this.state.curve.end.y + this.state.panels[this.state.curve.end.panel].y} ${this.state.curve.end.x + this.state.panels[this.state.curve.end.panel].x} ${this.state.curve.end.y + this.state.panels[this.state.curve.end.panel].y}`}/>}
				</svg>
			</div>
		);
	}
}
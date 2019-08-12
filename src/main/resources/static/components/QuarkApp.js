class QuarkApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jv3f4kr9: {
				archetype: StringPanel,
				x: 100, 
				y: 200,
				parameters: [
				    
				],
				values: [
				    "Test String"
				]
			},
			jv3f4ksn: {
				archetype: RequestPanel,
				x: 100, 
				y: 400,
				parameters: [
				    
				],
				values: [
				    "{}"
				]
			}, 
			jv3f4kt0: {
				archetype: PostMappingPanel,
				x: 400, 
				y: 200,
				parameters: [
				    {
				    	panel: "jv3f4kr9",
				    	value: 0
				    },
				    {
				    	panel: "jv3f4ksn",
				    	value: 0
				    }
				],
				values: [
				    
				]
			}
		};
	}
	
	updatePanel = (id, panel) => {
		this.setState({[id]: panel});
	}
	
	render() {
		let connections = [];
		return (
			<div onMouseMove={this.handleWindowMouseMove} onMouseDown={this.handleWindowMouseUp}>
				{Object.keys(this.state).map(key => {
					const panel = this.state[key];
					panel.parameters.forEach(p => {
						connections.push({x1: 0, y1: 0, x2: 100, y2: 100}); //Get position of anchor centers
					});
					const Archetype = panel.archetype;
					return <Archetype key={key} id={key} panel={panel} updatePanel={this.updatePanel}/>;
				})}
				<ConnectionRenderer>
					{connections.map(c => {
						return <Connection start={{x: c.x1, y: c.y1}} end={{x: c.x2, y: c.y2}}/>; //Add key
					})}
				</ConnectionRenderer>
			</div>
		);
	}
}
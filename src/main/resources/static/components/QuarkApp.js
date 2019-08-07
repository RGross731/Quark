class QuarkApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jv3f4kr9: {
				archetype: StringPanel,
				x: 100, 
				y: 200,
				parameters: [
				    {
				    	label: "Text",
				    	type: "String",
				    	reference: false,
				    	value: "Test String"
					}
				],
				values: [
				    {
				    	label: null,
				    	type: "String"//,
				    	//value: this.state.jv3f4kr9.parameters[0].value
				    }
				]
			},
			jv3f4ksn: {
				archetype: RequestPanel,
				x: 100, 
				y: 400,
				parameters: [
				    
				],
				values: [
				    {
				    	label: null,
				    	type: "JSON",
				    	value: "{}"
				    }
				]
			}, 
			jv3f4kt0: {
				archetype: PostMappingPanel,
				x: 400, 
				y: 200,
				parameters: [
				    {
				    	label: "Path",
				    	type: "String",
				    	reference: true//,
				    	//value: this.state.jv3f4kr9.values[0]
					},
					{
						label: "Request",
						type: "JSON",
				    	reference: true//,
				    	//value: this.state.jv3f4ksn.values[0]
					}
				],
				values: [
				    {
				    	label: null,
				    	type: "Function",
				    	value: null
				    }
				]
			}
		};
	}
	
	updatePanel = (id, panel) => {
		this.setState({[id]: panel});
	}
	
	render() {	
		return (
			<div onMouseMove={this.handleWindowMouseMove} onMouseDown={this.handleWindowMouseUp}>
				{Object.keys(this.state).map(key => {
					const panel = this.state[key];
					const Archetype = panel.archetype;
					return <Archetype key={key} id={key} panel={panel} updatePanel={this.updatePanel}/>;
				})}
				{/*
				<ConnectionRenderer>
					{Object.keys(connections).map(key => {
						const connection = connections[key];
						return <Connection key={key} start={{x: connection.x1, y: connection.y1}} end={{x: connection.x2, y: connection.y2}}/>;
					})}
				</ConnectionRenderer>
				*/}
			</div>
		);
	}
}
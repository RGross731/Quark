class QuarkApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			panels: {
				jv3f4kr9: {
					archetype: StringPanel,
					x: 100, 
					y: 200,
					outputVariables: {
						text: {
							anchorX: 0,
							anchorY: 0,
							type: "string",
							value: "text"
						}
					}
				},
				jv3f4ksn: {
					archetype: RequestPanel,
					x: 100, 
					y: 400,
					outputVariables: {
						request: {
							anchorX: 179,
							anchorY: 54,
							type: "object",
							value: "test"
						}
					}
				}, 
				jv3f4kt0: {
					archetype: PostMappingPanel,
					x: 400, 
					y: 200,
					inputVariables: {
						path: {
							anchorX: 0,
							anchorY: 0,
							type: "string",
							value: null
						},
						request: {
							anchorX: 21,
							anchorY: 97,
							type: "object",
							value: {
								panel: "jv3f4ksn",
								outputVariable: "request"
							}
						}
					}
				}
			}
		};
	}
	
	updatePanel = (id, panel, additive) => {
		if (additive) {
			panel = {...this.state.panels[id], ...panel};
		}
		this.setState({panels: {...this.state.panels, [id]: panel}});
		return panel;
	}
	
	updateConnection = (id, connection, additive) => {
		if (additive) {
			connection = {...this.state.connections[id], ...connection};
		}
		this.setState({connections: {...this.state.connections, [id]: connection}});
		return connection;
	}
	
	render() {
		const connections = {};
		Object.keys(this.state.panels).filter(key => this.state.panels[key].inputVariables != undefined).map(key => {
			const panel = this.state.panels[key];
			Object.keys(panel.inputVariables).map(iv => {
				const inputVariable = panel.inputVariables[iv];
				if (inputVariable.value != undefined) {
					const x1 = this.state.panels[inputVariable.value.panel].x + this.state.panels[inputVariable.value.panel].outputVariables[inputVariable.value.outputVariable].anchorX;
					const y1 = this.state.panels[inputVariable.value.panel].y + this.state.panels[inputVariable.value.panel].outputVariables[inputVariable.value.outputVariable].anchorY;
					const x2 = panel.x + inputVariable.anchorX;
					const y2 = panel.y + inputVariable.anchorY;
					connections[key + "-" + inputVariable.value.panel] = {x1: x1, y1: y1, x2: x2, y2: y2};
				}
			});
		});
		
		return (
			<div>
				{Object.keys(this.state.panels).map(key => {
					const panel = this.state.panels[key];
					const Archetype = panel.archetype;
					return <Archetype key={key} id={key} panel={panel} updatePanel={this.updatePanel} updateConnection={this.updateConnection}/>;
				})}
				<ConnectionRenderer>
					{Object.keys(connections).map(key => {
						const connection = connections[key];
						return <Connection key={key} start={{x: connection.x1, y: connection.y1}} end={{x: connection.x2, y: connection.y2}}/>;
					})}
				</ConnectionRenderer>
			</div>
		);
	}
}
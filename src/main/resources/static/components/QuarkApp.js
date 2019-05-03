class QuarkApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			panels: {
				jv3f4kr9: {
					archetype: StringPanel,
					x: 100, 
					y: 200
				},
				jv3f4ksn: {
					archetype: RequestPanel,
					x: 100, 
					y: 400
				}, 
				jv3f4kt0: {
					archetype: PostMappingPanel,
					x: 400, 
					y: 200
				}
			},
			connections: {
				jv68wu9h: {
					end: {
						panel: "jv3f4kt0",
						x: 21,
						y: 97
					},
					start: {
						panel: "jv3f4ksn",
						x: 179,
						y: 54
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
		return (
			<div>
				{Object.keys(this.state.panels).map(key => {
					const panel = this.state.panels[key];
					const Archetype = panel.archetype;
					return <Archetype key={key} id={key} panel={panel} updatePanel={this.updatePanel} updateConnection={this.updateConnection}/>;
				})}
				<ConnectionRenderer>
					{Object.keys(this.state.connections).map(key => {
						const connection = this.state.connections[key];
						if (connection != undefined) {
							return <Connection key={key} start={{x: this.state.panels[connection.start.panel].x + connection.start.x, y: this.state.panels[connection.start.panel].y + connection.start.y}} end={{x: (connection.end.panel ? this.state.panels[connection.end.panel].x : 0) + connection.end.x, y: (connection.end.panel ? this.state.panels[connection.end.panel].y : 0) + connection.end.y}}/>;
						}
					})}
				</ConnectionRenderer>
			</div>
		);
	}
}
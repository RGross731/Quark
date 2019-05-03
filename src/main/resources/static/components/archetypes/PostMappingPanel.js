function PostMappingPanel(props) {
	const colors = {
		normal: "#ff4444",
		light: "#ff5252",
		dark: "#cc0000"
	};
	
	return (				
		<Panel id={props.id} panel={props.panel} updatePanel={props.updatePanel} icon={"fas fa-network-wired"} text={"POST Mapping"} colors={colors}>
			<InputVariable id={props.id} panel={props.panel} text={"Path"} color={"#33b5e5"} updateConnection={props.updateConnection}/>
			<InputVariable id={props.id} panel={props.panel} text={"Request"} color={"#00c851"} updateConnection={props.updateConnection}/>
			<OutputVariable id={props.id} panel={props.panel} text={""} color={"#ff4444"} updateConnection={props.updateConnection}/>
		</Panel>
	);
}
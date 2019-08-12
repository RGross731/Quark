function PostMappingPanel(props) {
	const colors = {
		normal: "#ff4444",
		light: "#ff5252",
		dark: "#cc0000"
	};
	
	return (				
		<Panel id={props.id} panel={props.panel} updatePanel={props.updatePanel} text={"POST Mapping"} icon={"fas fa-network-wired"} colors={colors}>
			<Parameter id={props.id} panel={props.panel} updatePanel={props.updatePanel} text={"Path"} color={"#33b5e5"}/>
			<Parameter id={props.id} panel={props.panel} updatePanel={props.updatePanel} text={"Request"} color={"#00c851"}/>
			<Value id={props.id} panel={props.panel} updatePanel={props.updatePanel} color={colors.normal}/>
		</Panel>
	);
}
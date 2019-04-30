function PostMapping(props) {
	const colors = {
		normal: "#ff4444",
		light: "#ff5252",
		dark: "#cc0000"
	};
	
	return (				
		<Panel id={props.id} panel={props.panel} updatePanel={props.updatePanel} icon={"fas fa-network-wired"} text={"POST Mapping"} colors={colors}>
			<InputVariable id={props.id} panel={props.panel} onAnchorMouseDown={props.onAnchorMouseDown} onAnchorMouseUp={props.onAnchorMouseUp} text={"Path"} color={"#33b5e5"}/>
			<InputVariable id={props.id} panel={props.panel} onAnchorMouseDown={props.onAnchorMouseDown} onAnchorMouseUp={props.onAnchorMouseUp} text={"Request"} color={"#00c851"}/>
			<OutputVariable id={props.id} panel={props.panel} onAnchorMouseDown={props.onAnchorMouseDown} onAnchorMouseUp={props.onAnchorMouseUp} text={""} color={"#ff4444"}/>
		</Panel>
	);
}
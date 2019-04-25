function PostMapping(props) {
	const colors = {
		normal: "#ff4444",
		light: "#ff5252",
		dark: "#cc0000"
	};
	
	return (				
		<Panel icon={"fas fa-network-wired"} text={"POST Mapping"} updatePanel={props.updatePanel} details={props.details} colors={colors}>
			<InputVariable color={"#33b5e5"} text={"Path"}/>
			<InputVariable color={"#00c851"} text={"Request"} panel={"postMappingPanel"} onAnchorMouseDown={props.onAnchorMouseDown} onAnchorMouseUp={props.onAnchorMouseUp}/>
			<OutputVariable color={"#ff4444"}/>
		</Panel>
	);
}
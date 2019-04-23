function Request(props) {	
	const colors = {
		normal: "#00c851",
		light: "#00e676",
		dark: "#007e33"
	};
	
	return (
		<Panel icon={"far fa-file"} text={"Request"} updatePanel={props.updatePanel} details={props.details} colors={colors}>
			<OutputVariable color={"#00c851"} text={""} onAnchorMouseDown={props.onAnchorMouseDown} onAnchorMouseUp={props.onAnchorMouseUp}/>
		</Panel>
	);
}
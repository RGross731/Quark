function Request(props) {	
	const colors = {
		normal: "#00c851",
		light: "#00e676",
		dark: "#007e33"
	};
	
	return (
		<Panel id={props.id} panel={props.panel} updatePanel={props.updatePanel} icon={"far fa-file"} text={"Request"} colors={colors}>
			<OutputVariable id={props.id} panel={props.panel} text={""} color={"#00c851"} updateConnection={props.updateConnection}/>
		</Panel>
	);
}
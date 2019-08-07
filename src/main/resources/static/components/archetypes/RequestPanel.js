function RequestPanel(props) {	
	const colors = {
		normal: "#00c851",
		light: "#00e676",
		dark: "#007e33"
	};
	
	return (
		<Panel id={props.id} panel={props.panel} updatePanel={props.updatePanel} text={"Request"} icon={"far fa-file"} colors={colors}>
			<Value id={props.id} panel={props.panel} updateConnection={props.updateConnection} color={colors.normal}/>
		</Panel>
	);
}
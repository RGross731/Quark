function StringPanel(props) {	
	const colors = {
		normal: "#33b5e5",
		light: "#4fc3f7",
		dark: "#0099CC"
	};
	
	return (
		<Panel id={props.id} panel={props.panel} updatePanel={props.updatePanel} icon={"fas fa-font"} text={"String"} colors={colors}>
			<OutputVariable id={props.id} panel={props.panel} text={""} color={"#33b5e5"} updateConnection={props.updateConnection}/>
		</Panel>
	);
}
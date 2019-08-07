function StringPanel(props) {	
	const colors = {
		normal: "#33b5e5",
		light: "#4fc3f7",
		dark: "#0099cc"
	};
	
	return (
		<Panel id={props.id} panel={props.panel} updatePanel={props.updatePanel} text={"String"} icon={"fas fa-font"} colors={colors}>
			<Parameter id={props.id} panel={props.panel} updateConnection={props.updateConnection} text={"Text"} color={"#33b5e5"}/>	
			<Value id={props.id} panel={props.panel} updateConnection={props.updateConnection} color={colors.normal}/>
		</Panel>
	);
}
function OutputVariable(props) {
	const style = {
		backgroundColor: "#2E2E2E",
		height: "40px",
		textAlign: "right",
		paddingLeft: "10px",
		paddingRight: "10px",
		lineHeight: "40px",
		fontFamily: "Open Sans",
		color: "#ffffff"
	};
	
	return (
		<div style={style}>
			{props.text}<i className="far fa-circle fa-sm" style={{paddingLeft: 10, color: props.color}}></i>
		</div>
	);
}
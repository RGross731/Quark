function InputVariable(props) {
	const style = {
		backgroundColor: "#2E2E2E",
		height: "40px",
		textAlign: "left",
		paddingLeft: "10px",
		paddingRight: "10px",
		lineHeight: "40px",
		fontFamily: "Open Sans",
		color: "#ffffff"
	};
	
	return (
		<div style={style}>
			<i className="far fa-circle fa-sm" style={{paddingRight: 10, color: props.color}}></i>{props.text}
		</div>
	);
}
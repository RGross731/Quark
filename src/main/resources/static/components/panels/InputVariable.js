function InputVariable(props) {
	const style = {
		backgroundColor: props.color,
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
			<i className="far fa-circle fa-sm" style={{paddingRight: 10, fill: "#ffffff"}}></i>{props.text}
		</div>
	);
}
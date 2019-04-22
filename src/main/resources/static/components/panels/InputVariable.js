function InputVariable(props) {
	const style = {
		backgroundColor: "#424242",
		height: "40px",
		textAlign: "left",
		paddingLeft: "10px",
		paddingRight: "10px",
		lineHeight: "40px",
		fontFamily: "Open Sans",
		color: "#ffffff",
		borderTop: "1px solid #616161",
		borderBottom: "1px solid #2e2e2e",
		marginTop: "1px",
		marginBottom: "1px"
	};
	
	return (
		<div style={style}>
			<i className="far fa-circle fa-sm" onMouseDown={props.onAnchorMouseDown} style={{paddingRight: 10, color: props.color}}></i>{props.text}
		</div>
	);
}
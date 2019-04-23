function OutputVariable(props) {
	const style = {
		backgroundColor: "#424242",
		height: "40px",
		textAlign: "right",
		paddingLeft: "10px",
		paddingRight: "10px",
		lineHeight: "40px",
		fontFamily: "Open Sans",
		color: "#ffffff",
		borderTop: "1px solid #616161",
		borderBottom: "1px solid #2e2e2e",
		borderRight: "1px solid #2e2e2e",
		borderLeft: "1px solid #2e2e2e",
		marginTop: "1px",
		marginBottom: "1px"
	};
	
	return (
		<div style={style}>
			{props.text}<i className="far fa-circle fa-sm" onMouseDown={props.onAnchorMouseDown} onMouseUp={props.onAnchorMouseUp} style={{paddingLeft: 10, color: props.color}}></i>
		</div>
	);
}
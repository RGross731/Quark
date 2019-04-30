function InputVariable(props) {
	const style = {
		backgroundColor: "#424242",
		height: "40px",
		textAlign: "left",
		lineHeight: "40px",
		fontFamily: "Quicksand",
		color: "#ffffff",
		borderTop: "1px solid #616161",
		borderBottom: "1px solid #2e2e2e",
		borderRight: "1px solid #2e2e2e",
		borderLeft: "1px solid #2e2e2e",
		marginTop: "1px",
		marginBottom: "1px"
	};
	
	const anchor = {
		id: props.id,
		panel: props.panel, 
		type: "input", 
		color: props.color
	};	
	
	return (
		<div style={style}>
			<div style={{height: "40px", width: "40px", float: "left"}}>
				<svg width="40" height="40" viewBox="0 0 40 40">
					<circle cx="20" cy="20" r="6" stroke={props.color} strokeWidth="2" fill={props.connected ? props.color : "#424242"} onMouseDown={(e) => props.onAnchorMouseDown(e, anchor)} onMouseUp={(e) => props.onAnchorMouseUp(e, anchor)}/>
				</svg>
			</div>
			{props.text}
		</div>
	);
}
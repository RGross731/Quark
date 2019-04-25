function OutputVariable(props) {
	const style = {
		backgroundColor: "#424242",
		height: "40px",
		textAlign: "right",
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
	
	return (
		<div style={style}>
			{props.text}
			<div style={{height: "40px", width: "40px", float: "right"}}>
				<svg width="40" height="40" viewBox="0 0 40 40">
					<circle cx="20" cy="20" r="6" stroke={props.color} strokeWidth="2" fill={"#424242"} onMouseDown={props.onAnchorMouseDown} onMouseUp={props.onAnchorMouseUp}/>
				</svg>
			</div>
			{/*<i className="far fa-circle fa-sm" onMouseDown={props.onAnchorMouseDown} onMouseUp={props.onAnchorMouseUp} style={{paddingLeft: 10, color: props.color}}></i>*/}
		</div>
	);
}
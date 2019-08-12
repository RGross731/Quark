function Value(props) {	
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
		marginBottom: "1px",
		textShadow: "1px 1px #212121"
	};	
	
	return (
		<div style={style}>
			<div style={{height: "40px", width: "40px", float: "right"}}>
				<Anchor id={props.id} panel={props.panel} updatePanel={props.updatePanel} color={props.color}/>
			</div>
		</div>
	);
}
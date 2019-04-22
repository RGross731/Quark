function Header(props) {
	const style = {
		cursor: props.cursor,
		borderRadius: "4px 4px 0px 0px",
		//background: `linear-gradient(to right, ${props.color}, #cc0000)`,
		backgroundColor: props.colors.normal,
		height: "30px",
		textAlign: "left",
		paddingLeft: "10px",
		paddingRight: "10px",
		lineHeight: "30px",
		fontFamily: "Open Sans",
		color: "#ffffff",
		borderTop: `1px solid ${props.colors.light}`,
		borderBottom: `1px solid ${props.colors.dark}`,
		marginBottom: "1px",
		textShadow: `1px 1px ${props.colors.dark}`
	};
	
	return (
		<div onMouseDown={props.onMouseDown} onMouseMove={props.onMouseMove} onMouseUp={props.onMouseUp} style={style}>
			<i className={props.icon} style={{paddingRight: 10}}></i>{props.text}
		</div>
	);
}
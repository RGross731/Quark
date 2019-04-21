function Footer(props) {
	const style = {
		borderRadius: "0px 0px 4px 4px",
		backgroundColor: props.color,
		height: "4px",
		borderTop: `1px solid ${props.lightColor}`,
		marginTop: "1px"
	};
	
	return (
		<div style={style}/>
	);
}
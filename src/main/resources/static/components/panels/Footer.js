function Footer(props) {
	const style = {
		borderRadius: "0px 0px 4px 4px",
		backgroundColor: props.colors.normal,
		height: "4px",
		borderTop: `1px solid ${props.colors.light}`,
		borderBottom: `1px solid ${props.colors.dark}`,
		marginTop: "1px"
	};
	
	return (
		<div style={style}/>
	);
}
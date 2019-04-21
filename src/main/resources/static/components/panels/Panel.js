function Panel(props) {	
	const style = {
		position: "absolute",
		borderRadius: "4px",
		backgroundColor: "#212121",
		boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)",
		width: "200px",
		left: props.x,
		top: props.y
	};
		
	return (
		<div style={style}>
			{props.children}
		</div>
	);
}
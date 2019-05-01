function Connection(props) {		
	const startControlPoint = {x: (props.start.x + props.end.x) / 2, y: props.start.y};
	const endControlPoint = {x: (props.start.x + props.end.x) / 2, y: props.end.y};	
	const commands = `M ${props.start.x} ${props.start.y} C ${startControlPoint.x} ${startControlPoint.y} ${endControlPoint.x} ${endControlPoint.y} ${props.end.x} ${props.end.y}`;
	
	return (
		<path 
			d={commands} 
			fill="none" 
			stroke={props.color || "#e9ecef"}
			strokeWidth={4}
		/>
	);
}
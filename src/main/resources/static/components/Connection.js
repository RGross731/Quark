function Connection(props) {		
	if (!props.start || !props.end) {
		return null;
	}
	
	const start = props.start;
	const end = props.end;
	const startCP = {x: (start.x + end.x) / 2, y: start.y};
	const endCP = {x: (start.x + end.x) / 2, y: end.y};	
	const commands = `M ${start.x} ${start.y} C ${startCP.x} ${startCP.y} ${endCP.x} ${endCP.y} ${end.x} ${end.y}`;

	return (
		<path 
			d={commands} 
			fill="none" 
			stroke="#e9ecef"
			strokeWidth={4}
		/>
	);
}
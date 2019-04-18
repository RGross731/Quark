function Curve(props) {
	return (
		<path 
			d={props.commands} 
			fill="none" 
			stroke="#33bbff" 
			strokeWidth={4}
		/>
	);
}
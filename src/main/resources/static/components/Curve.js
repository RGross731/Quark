function Curve(props) {
	return (
		<path 
			d={props.commands} 
			fill="none" 
			stroke="#ffbb33"
			strokeWidth={4}
		/>
	);
}
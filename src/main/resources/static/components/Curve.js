function Curve(props) {
	return (
		<path 
			d={props.commands} 
			fill="none" 
			stroke="#e9ecef"
			strokeWidth={4}
		/>
	);
}
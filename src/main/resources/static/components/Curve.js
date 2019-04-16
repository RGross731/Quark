function Curve(props) {
	return <path d={"M " + props.startPoint.x + " " + props.startPoint.y + " Q " + props.controlPoint.x + " " + props.controlPoint.y + " " + props.endPoint.x + " " + props.endPoint.y} fill="none" stroke="#33bbff" strokeWidth={4}/>;
}
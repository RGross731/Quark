function Handle(props) {
	return <ellipse cx={props.coordinates.x} cy={props.coordinates.y} rx={props.size} ry={props.size} fill={props.fill} stroke="#212529" strokeWidth={2} onMouseDown={props.onMouseDown} style={{cursor: props.cursor}}/>;
}
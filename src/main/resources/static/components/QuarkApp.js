class QuarkApp extends React.Component {
	render() {
		return (
			<div>
				<BezierCurve />
				<ConnectingCurve />
				<DraggableCurve />
				<DraggableBox />
			</div>
		);
	}
}
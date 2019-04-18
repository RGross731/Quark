class QuarkApp extends React.Component {
	render() {
		return (
			<div>
				<BezierCurve />
				<ConnectingCurve />
				<DraggableCurve />
				<DrawableCurve />
				<DraggableBox />
			</div>
		);
	}
}
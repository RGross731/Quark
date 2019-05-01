class ConnectingCurve extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			anchors: {left: {x: 32, y: 50}, right: {x: 168, y: 150}}
		};
	}
	
	render() {
		const startP = this.state.anchors.left;
		const startCP = {x: (this.state.anchors.left.x + this.state.anchors.right.x) / 2, y: this.state.anchors.left.y};
		const endCP = {x: (this.state.anchors.left.x + this.state.anchors.right.x) / 2, y: this.state.anchors.right.y};
		const endP = this.state.anchors.right;
		const commands = `M ${startP.x} ${startP.y} C ${startCP.x} ${startCP.y} ${endCP.x} ${endCP.y} ${endP.x} ${endP.y}`;
		
		return (
			<div className="panel2">
				<svg viewBox="0 0 200 200">
					<Curve commands={commands}/>
				</svg>
				<div style={{left: 16, top: 34, width: 32, height: 32, position: "absolute", background: "#555555"}}>
					<svg viewBox="0 0 32 32">
						<Anchor coordinates={{x: 16, y: 16}} fill={"#e9ecef"} size={8}/>
					</svg>
				</div>
				<div style={{left: 152, top: 134, width: 32, height: 32, position: "absolute", background: "#555555"}}>
					<svg viewBox="0 0 32 32">
						<Anchor coordinates={{x: 16, y: 16}} fill={"#e9ecef"} size={8}/>
					</svg>
				</div>
				{/*
				<div style={{width: 200, height: 200, position: "absolute"}}>
					<svg viewBox="0 0 200 200">
						<Curve commands={commands}/>
					</svg>
				</div>
				*/}
		  	</div>
		);
	}
}
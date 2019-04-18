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
				<svg viewBox="0 0 200 200" onMouseMove={this.state.curve ? this.handleMouseMove : undefined} onMouseUp={this.state.curve ? this.handleMouseUp : undefined} cursor={this.state.curve ? this.state.cursor : undefined}>
					<Curve commands={commands}/>
					<Anchor coordinates={this.state.anchors.left} fill={"#e9ecef"} size={8}/>
					<Anchor coordinates={this.state.anchors.right} fill={"#e9ecef"} size={8}/>
		    	</svg>
		  	</div>
		);
	}
}
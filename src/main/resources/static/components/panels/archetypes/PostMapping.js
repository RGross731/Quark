class PostMapping extends React.Component {
	constructor(props) {
		super(props);
		this.state = {xOffset: 0, yOffset: 0, dragging: false, cursor: '-webkit-grab'};
	}
	
	handleMouseDown = (e) => {
		e.preventDefault();
		this.setState({xOffset: e.pageX - this.props.x, yOffset: e.pageY - this.props.y, dragging: true, cursor: '-webkit-grabbing'});
	}
	
	handleMouseMove = (e) => {
		this.props.updatePanel('postMappingPanel', {x: e.pageX - this.state.xOffset, y: e.pageY - this.state.yOffset});
	}
	
	handleMouseUp = (e) => {
		this.setState({dragging: false, cursor: '-webkit-grab'});
	}
	
	render() {		
		const colors = {
			normal: "#ff4444",
			light: "#ff5252",
			dark: "#cc0000"
		};
		
		return (
			<Panel x={this.props.x} y={this.props.y}>
				<Header onMouseDown={this.handleMouseDown} onMouseMove={this.state.dragging ? this.handleMouseMove : undefined} onMouseUp={this.state.dragging ? this.handleMouseUp : undefined} icon={"fas fa-network-wired"} text={"POST Mapping"} cursor={this.state.cursor} colors={colors}/>
				<InputVariable color={"#33b5e5"} text={"Path"}/>
				<InputVariable color={"#00c851"} text={"Request"} onAnchorMouseDown={this.props.onAnchorMouseDown} onAnchorMouseUp={this.props.onAnchorMouseUp}/>
				<OutputVariable color={"#ff4444"}/>
				<Footer colors={colors}/>
			</Panel>
		);
	}
}
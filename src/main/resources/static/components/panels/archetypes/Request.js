class Request extends React.Component {
	constructor(props) {
		super(props);
		this.state = {xOffset: 0, yOffset: 0, dragging: false, cursor: '-webkit-grab'};
	}
	
	handleMouseDown = (e) => {
		e.preventDefault();
		this.setState({xOffset: e.pageX - this.props.details.x, yOffset: e.pageY - this.props.details.y, dragging: true, cursor: '-webkit-grabbing'});
	}
	
	handleMouseMove = (e) => {
		this.props.updatePanel('requestPanel', {x: e.pageX - this.state.xOffset, y: e.pageY - this.state.yOffset});
	}
	
	handleMouseUp = (e) => {
		this.setState({dragging: false, cursor: '-webkit-grab'});
	}
	
	render() {	
		const colors = {
			normal: "#00c851",
			light: "#00e676",
			dark: "#007e33"
		};
		
		return (
			<Panel x={this.props.details.x} y={this.props.details.y}>
				<Header onMouseDown={this.handleMouseDown} onMouseMove={this.state.dragging ? this.handleMouseMove : undefined} onMouseUp={this.state.dragging ? this.handleMouseUp : undefined} icon={"far fa-file"} text={"Request"} cursor={this.state.cursor} colors={colors}/>
				<OutputVariable color={"#00c851"} text={""} onAnchorMouseDown={this.props.onAnchorMouseDown} onAnchorMouseUp={this.props.onAnchorMouseUp}/>
				<Footer colors={colors}/>
			</Panel>
		);
	}
}
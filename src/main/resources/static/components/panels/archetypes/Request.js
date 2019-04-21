class Request extends React.Component {
	constructor(props) {
		super(props);
		this.state = {x: props.x, y: props.y, xOffset: 0, yOffset: 0, dragging: false, cursor: '-webkit-grab'};
	}
	
	handleMouseDown = (e) => {
		e.preventDefault();
		this.setState({xOffset: e.pageX - this.state.x, yOffset: e.pageY - this.state.y, dragging: true, cursor: '-webkit-grabbing'});
	}
	
	handleMouseMove = (e) => {
		this.setState({x: e.pageX - this.state.xOffset, y: e.pageY - this.state.yOffset});
	}
	
	handleMouseUp = (e) => {
		this.setState({dragging: false, cursor: '-webkit-grab'});
	}
	
	render() {		
		return (
			<Panel x={this.state.x} y={this.state.y}>
				<Header onMouseDown={this.handleMouseDown} onMouseMove={this.state.dragging ? this.handleMouseMove : undefined} onMouseUp={this.state.dragging ? this.handleMouseUp : undefined} icon={"far fa-file"} text={"Request"} cursor={this.state.cursor} color={"#00c851"} darkColor={"#007e33"}/>
				<OutputVariable color={"#00c851"} text={""}/>
				<Footer color={"#00c851"} lightColor={"#00e676"}/>
			</Panel>
		);
	}
}
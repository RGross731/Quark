class Panel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {x: 100, y: 400, xOffset: 0, yOffset: 0, dragging: false, cursor: '-webkit-grab'};
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
		const style = {
			position: "absolute",
			//borderRadius: "4px",
			//backgroundColor: "#616161",
			boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)",
			width: "200px",
			left: this.state.x,
			top: this.state.y
		};
		
		return (
			<div style={style}>
				<Header onMouseDown={this.handleMouseDown} onMouseMove={this.state.dragging ? this.handleMouseMove : undefined} onMouseUp={this.state.dragging ? this.handleMouseUp : undefined} icon={"fas fa-network-wired"} text={"REST Endpoint"} cursor={this.state.cursor} color={"#ff4444"}/>
				<InputVariable color={"#00c851"} text={"Request"}/>
				<OutputVariable color={"#ff4444"} text={""}/>
				<Footer color={"#616161"}/>
			</div>
		);
	}
}
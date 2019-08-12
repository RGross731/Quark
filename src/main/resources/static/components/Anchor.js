class Anchor extends React.Component {
	constructor(props) {
		super(props);
	}
	
	handleAnchorMouseDown = (e) => {
		e.preventDefault();
		window.addEventListener("mousemove", this.handleWindowMouseMove);
		window.addEventListener("mouseup", this.handleWindowMouseUp);
		console.log(e.target.getClientRects());
		//Create temporary connection
	}
	
	handleAnchorMouseUp = (e) => {
		//Validate connection and lock it in
	}
	
	handleWindowMouseMove = (e) => {
		//Update temporary connection
	}
	
	handleWindowMouseUp = (e) => {
		window.removeEventListener("mousemove", this.handleWindowMouseMove);
		window.removeEventListener("mouseup", this.handleWindowMouseUp);
		//Delete temporary connection
	}
	
	render() {		
		return (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<circle cx="20" cy="20" r="6" stroke={this.props.color} strokeWidth="2" fill={"#424242"} onMouseDown={this.handleAnchorMouseDown} onMouseUp={this.handleAnchorMouseUp}/>
			</svg>
		);
	}
}
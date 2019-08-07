class Value extends React.Component {
	constructor(props) {
		super(props);
	}
	
	handleAnchorMouseDown = (e) => {
		e.preventDefault();
		window.addEventListener("mousemove", this.handleWindowMouseMove);
		window.addEventListener("mouseup", this.handleWindowMouseUp);
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
		const style = {
			backgroundColor: "#424242",
			height: "40px",
			textAlign: "right",
			lineHeight: "40px",
			fontFamily: "Quicksand",
			color: "#ffffff",
			borderTop: "1px solid #616161",
			borderBottom: "1px solid #2e2e2e",
			borderRight: "1px solid #2e2e2e",
			borderLeft: "1px solid #2e2e2e",
			marginTop: "1px",
			marginBottom: "1px",
			textShadow: "1px 1px #212121"
		};	
		
		return (
			<div style={style}>
				<div style={{height: "40px", width: "40px", float: "right"}}>
					<svg width="40" height="40" viewBox="0 0 40 40">
						<circle cx="20" cy="20" r="6" stroke={this.props.color} strokeWidth="2" fill={"#424242"} onMouseDown={this.handleAnchorMouseDown} onMouseUp={this.handleAnchorMouseUp}/>
					</svg>
				</div>
			</div>
		);
	}
}
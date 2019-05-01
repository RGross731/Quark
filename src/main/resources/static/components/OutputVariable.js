class OutputVariable extends React.Component {
	constructor(props) {
		super(props);
	}
	
	handleAnchorMouseDown = (e) => {
		e.preventDefault();
		window.addEventListener("mousemove", this.handleWindowMouseMove);
		window.addEventListener("mouseup", this.handleWindowMouseUp);
		this.props.updateConnection("current", {start: {panel: this.props.id, x: e.target.getBoundingClientRect().left + 6 - this.props.panel.x, y: e.target.getBoundingClientRect().top + 6 - this.props.panel.y}, end: {panel: undefined, x: e.pageX, y: e.pageY}}, false);
	}
	
	handleWindowMouseMove = (e) => {
		this.props.updateConnection("current", {end: {panel: undefined, x: e.pageX, y: e.pageY}}, true);
	}
	
	handleAnchorMouseUp = (e) => {
		const connection = this.props.updateConnection("current", {end: {panel: this.props.id, x: e.target.getBoundingClientRect().left + 6 - this.props.panel.x, y: e.target.getBoundingClientRect().top + 6 - this.props.panel.y}}, true);
		this.props.updateConnection(Date.now().toString(36), connection, false);
	}
	
	handleWindowMouseUp = (e) => {
		window.removeEventListener("mousemove", this.handleWindowMouseMove);
		window.removeEventListener("mouseup", this.handleWindowMouseUp);
		this.props.updateConnection("current", undefined, false);
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
				{this.props.text}
				{/*}<div style={{height: "40px", width: "144px", float: "left", lineHeight: "38px", marginLeft: 14}}>	
					<input type="text" style={{borderRadius: "4px", border: "1px solid #212121", height: 18, width: 144, backgroundColor: "#424242", color: "#ffffff", fontFamily: "Quicksand"}} value={"test"}/>
				</div>*/}
				<div style={{height: "40px", width: "40px", float: "right"}}>
					<svg width="40" height="40" viewBox="0 0 40 40">
						<circle cx="20" cy="20" r="6" stroke={this.props.color} strokeWidth="2" fill={"#424242"} onMouseDown={this.handleAnchorMouseDown} onMouseUp={this.handleAnchorMouseUp}/>
					</svg>
				</div>
			</div>
		);
	}
}
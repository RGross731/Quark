class Panel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {offsetX: 0, offsetY: 0, cursor: "-webkit-grab"};
	}
	
	handleHeaderMouseDown = (e) => {
		e.preventDefault();
		window.addEventListener("mousemove", this.handleWindowMouseMove);
		window.addEventListener("mouseup", this.handleWindowMouseUp);
		this.setState({offsetX: e.pageX - this.props.panel.x, offsetY: e.pageY - this.props.panel.y, cursor: "-webkit-grabbing"});
	}
	
	handleWindowMouseMove = (e) => {
		this.props.updatePanel(this.props.id, {archetype: this.props.panel.archetype, x: e.pageX - this.state.offsetX, y: e.pageY - this.state.offsetY});
	}
	
	handleWindowMouseUp = (e) => {
		window.removeEventListener("mousemove", this.handleWindowMouseMove);
		window.removeEventListener("mouseup", this.handleWindowMouseUp);
		this.setState({cursor: "-webkit-grab"});
	}
	
	render() {	
		const panelStyle = {
			position: "absolute",
			borderRadius: "4px",
			backgroundColor: "#212121",
			boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)",
			width: "200px",
			left: this.props.panel.x,
			top: this.props.panel.y
		};
		
		const headerStyle = {
			cursor: this.state.cursor,
			borderRadius: "4px 4px 0px 0px",
			backgroundColor: this.props.colors.normal,
			height: "30px",
			textAlign: "left",
			paddingLeft: "10px",
			paddingRight: "10px",
			lineHeight: "30px",
			fontFamily: "Quicksand",
			color: "#ffffff",
			borderTop: `1px solid ${this.props.colors.light}`,
			borderBottom: `1px solid ${this.props.colors.dark}`,
			borderRight: `1px solid ${this.props.colors.dark}`,
			borderLeft: `1px solid ${this.props.colors.dark}`,
			marginBottom: "1px",
			textShadow: `1px 1px ${this.props.colors.dark}`
		};
		
		const footerStyle = {
			borderRadius: "0px 0px 4px 4px",
			backgroundColor: this.props.colors.normal,
			height: "4px",
			borderTop: `1px solid ${this.props.colors.light}`,
			borderBottom: `1px solid ${this.props.colors.dark}`,
			borderLeft: `1px solid ${this.props.colors.dark}`,
			borderRight: `1px solid ${this.props.colors.dark}`,
			marginTop: "1px"
		};
		
		return (
			<div style={panelStyle}>
				<div onMouseDown={this.handleHeaderMouseDown} style={headerStyle}>
					<i className={this.props.icon} style={{paddingRight: 10}}></i>{this.props.text}
				</div>
				{this.props.children}
				<div style={footerStyle}/>
			</div>
		);
	}
}
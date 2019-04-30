class Panel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {xOffset: 0, yOffset: 0, dragging: false, cursor: '-webkit-grab'};
	}
	
	handleMouseDown = (e) => {
		e.preventDefault();
		window.addEventListener('mousemove', this.handleMouseMove);
		window.addEventListener('mouseup', this.handleMouseUp);
		this.setState({xOffset: e.pageX - this.props.panel.x, yOffset: e.pageY - this.props.panel.y, dragging: true, cursor: '-webkit-grabbing'});
	}
	
	handleMouseMove = (e) => {
		this.props.updatePanel(this.props.id, {archetype: this.props.panel.archetype, x: e.pageX - this.state.xOffset, y: e.pageY - this.state.yOffset});
	}
	
	handleMouseUp = (e) => {
		window.removeEventListener('mousemove', this.handleMouseMove);
		window.removeEventListener('mouseup', this.handleMouseUp);
		this.setState({dragging: false, cursor: '-webkit-grab'});
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
			//background: `linear-gradient(to right, ${props.color}, #cc0000)`,
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
				<div onMouseDown={this.handleMouseDown} style={headerStyle}>
					<i className={this.props.icon} style={{paddingRight: 10}}></i>{this.props.text}
				</div>
				{this.props.children}
				<div style={footerStyle}/>
			</div>
		);
	}
}
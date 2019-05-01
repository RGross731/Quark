class ConnectionRenderer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			windowWidth: 0, 
			windowHeight: 0
		};
	}
	
	componentDidMount = () => {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount= () => {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
	}
	
	render() {			
		return (
			<svg viewBox={`0 0 ${this.state.windowWidth} ${this.state.windowHeight}`}>
				{this.props.children}
			</svg>
		);
	}
}
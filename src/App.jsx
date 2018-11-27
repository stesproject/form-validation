import React from "react";
import Form from "Form";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<React.Fragment>
				<div className="react-form-container">
					<Form />
				</div>
			</React.Fragment>
		);
	}
}

export default App;

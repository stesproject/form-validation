import React from "react";
import Axios from "axios";
import Form from "Form";

let buttonEnabled = true;

function checkButton() {}

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
					<form onSubmit={this.handleSubmit}>
						<Form />
						<input className="button" type="submit" value="Submit" disabled={buttonEnabled} />
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default App;

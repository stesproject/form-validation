import React from "react";
import Field from "Field";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonDisabled: true
		};
		this.checkValidity = this.checkValidity.bind(this);
	}

	checkValidity(e) {
		this.setState({buttonDisabled: ! e.target.form.checkValidity()});
	}

	render() {
		const {buttonDisabled} = this.state;

		return (
			<form id="mainForm" onSubmit={this.handleSubmit}>
				<Field
					label="Name"
					type="text"
					pattern="[a-zA-Z]+"
					message="Only alphanumeric characters are allowed."
					required={true}
					checkValidity={this.checkValidity}
				/>

				<Field
					label="Surname"
					type="text"
					pattern="[a-zA-Z]+"
					message="Only alphanumeric characters are allowed."
					required={true}
					checkValidity={this.checkValidity}
				/>

				<Field
					label="Username"
					type="text"
					pattern="^.{3,12}$"
					message="Username must be at least 3 characters long and maximum 12."
					required={true}
					checkValidity={this.checkValidity}
				/>

				<Field
					label="E-mail"
					type="email"
					message="Please enter a valid e-mail address."
					required={true}
					checkValidity={this.checkValidity}
				/>

				<Field
					label="Password"
					type="password"
					pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
					message="Password must contain at least 8 characters, 1 number, 1 lowercase and 1 uppercase letter."
					required={true}
					checkValidity={this.checkValidity}
				/>

				<input className="button" type="submit" value="Submit" disabled={buttonDisabled} />
			</form>
		);
	}
}

export default Form;

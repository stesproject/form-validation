import React from "react";
import Field from "Field";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Field
					label="Name"
					type="text"
					pattern="[a-zA-Z]+"
					message="Only alphanumeric characters are allowed."
					required="true"
				/>

				<Field
					label="Surname"
					type="text"
					pattern="[a-zA-Z]+"
					message="Only alphanumeric characters are allowed."
					required="true"
				/>

				<Field
					label="Username"
					type="text"
					pattern="^.{3,12}$"
					message="Username must be minimum 3 characters long and maximum 12."
					required="true"
				/>

				<Field label="E-mail" type="email" required="true" />

				<Field
					label="Password"
					type="password"
					pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
					message="Password must contain at least 8 characters, 1 number, 1 lowercase and 1 uppercase letter."
					required="true"
				/>
			</div>
		);
	}
}

export default Form;

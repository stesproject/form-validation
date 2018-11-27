import React from "react";
import Field from "Field";
import Fields from "./fields";
import {uid} from "react-uid";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonDisabled: true
		};
		this.checkValidity = this.checkValidity.bind(this);
	}

	checkValidity(e) {
		// Get the event parent (form).
		this.setState({buttonDisabled: !e.target.form.checkValidity()});
	}

	render() {
		const {buttonDisabled} = this.state;

		return (
			<form id="mainForm" onSubmit={this.handleSubmit}>
				{this.getFields()}

				<input className="button" type="submit" value="Submit" disabled={buttonDisabled} />
			</form>
		);
	}

	getFields() {
		return Fields.map((field) => (
			<Field
				key={uid(field)}
				label={field.label}
				type={field.type}
				pattern={field.pattern}
				message={field.message}
				required={field.required}
				checkValidity={this.checkValidity}
			/>
		));
	}
}

export default Form;

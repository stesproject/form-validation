import React from "react";

/* const Field = ({label, type}) => {
	return (
		<label>
			{label}
			<input type={type}/>
		</label>
	);
}; */

class Field extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null
		};
		this.checkField = this.checkField.bind(this);
	}

	render() {
		let classES = this.state.error ? "inputWrong" : "inputOk";
		
		return (
			<label>
				{this.props.label}
				<input
					className={classES}
					type={this.props.type}
					pattern={this.props.pattern}
					title={this.props.message}
					onBlur={this.checkField}
					onFocus={this.setFocus}
					required={this.props.required}
				/>
			</label>
		);
	}

	setFocus(event) {
		/* event.target.style = `border-bottom-color: #3464bd;`; */
	}

	checkField(event) {
		/* console.log(`${event.target.value} - ${event.target.title}`); */

		this.setState({error: !event.target.checkValidity()});
		console.log(this.state);
		console.log(event.target.validationMessage);
	}
}

export default Field;

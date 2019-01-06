const React = require('react')
const classnames = require('classnames')

class Input extends React.Component {
	constructor(props) {
		super(props);

		this.onInput = this.onInput.bind(this);
	}

	onInput(e) {
		const { onInput } = this.props;

		onInput && onInput(e);
	}

	render() {
		const containerClasses = classnames('input');
		const labelClasses = classnames('input-label');
		const inputClasses = classnames('input-field');
		const borderClasses = classnames('input-border');

		const { type, label, message, id } = this.props;

		return (
			<div className={containerClasses}>
				<input className={inputClasses} id={id} type={type} onInput={this.onInput} />
				<label className={labelClasses} htmlFor={id}>{label}</label>
				<div className={borderClasses}></div>
				{ message && <span>{message}</span> }
			</div>
		);
	}
}

Input.defaultProps = {
  type: 'text',
  label: '',
  id: '',
}

module.exports = Input;
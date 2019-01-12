const React = require('react')
const classnames = require('classnames')

class Input extends React.Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);

		this.state = {
			value: props.value,
			error: false,
		}
	}

	onChange(e) {
		const { onChange } = this.props;
		const { target } = e;

		this.setState({
			value: target.value
		});

		onChange && onChange(e);
	}

	render() {
		const { name, type, label, message, id } = this.props;
		const { value } = this.state;

		const containerClasses = classnames('input');
		const innerContainerClasses = classnames('input-inner');
		const labelClasses = classnames('input-label');
		const inputClasses = classnames('input-field', {
			'input--has-value': value
		});
		const borderClasses = classnames('input-border');


		return (
			<div className={containerClasses}>
				<div className={innerContainerClasses}>
					<input name={name} className={inputClasses} id={id} type={type} onChange={this.onChange} value={value} />
					<label className={labelClasses} htmlFor={id}>{label}</label>
					<div className={borderClasses}></div>
					{ message && <span>{message}</span> }
				</div>
			</div>
		);
	}
}

Input.defaultProps = {
	name: '',
  type: 'text',
  label: '',
  id: '',
  value: '',
}

module.exports = Input;
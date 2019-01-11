const React = require('react')
const classnames = require('classnames')

class Radio extends React.Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.radioLabel = React.createRef();

		this.state = {
			value: props.value,
			options: props.options,
			error: false,
		}
	}

	onChange(e) {
		const { onChange } = this.props;
		const { target } = e;

		this.setState({
			value: target.checked
		});

		onChange && onChange(e);
	}

	render() {
		const { name, type, label, message, id } = this.props;
		const { value, options } = this.state;

		const containerClasses = classnames('radio');
		const labelClasses = classnames('radio-label');
		const radioClasses = classnames('radio-field', {
			'radio-field--has-value': value
		});
		const radioMimicClasses = classnames('radio-field-mimic', {
			'radio-field-mimic--has-value': value
		});
		const borderClasses = classnames('radio-border');


		return (
			<div className={containerClasses}>
				<label className={labelClasses} htmlFor={id} ref={this.radioLabel}>
					<input name={name} className={radioClasses} id={id} type={type} onChange={this.onChange} value={value} />
					<span className={radioMimicClasses}></span>
					{label}
				</label>
				{ message && <span>{message}</span> }
			</div>
		);
	}
}

Radio.defaultProps = {
  name: '',
	type: 'radio',
  label: '',
  id: '',
  value: '',
}

module.exports = Radio;
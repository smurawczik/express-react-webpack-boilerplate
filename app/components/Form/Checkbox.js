const React = require('react')
const classnames = require('classnames')

class Checkbox extends React.Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.onCheckboxClick = this.onCheckboxClick.bind(this);
		this.checkboxLabel = React.createRef();

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

	onCheckboxClick() {
		this.checkboxLabel.current.click();
	}

	render() {
		const { name, type, label, message, id } = this.props;
		const { value, options } = this.state;

		const containerClasses = classnames('checkbox');
		const labelClasses = classnames('checkbox-label');
		const checkboxClasses = classnames('checkbox-field', {
			'checkbox--has-value': value
		});
		const checkboxMimicClasses = classnames('checkbox-field-mimic', {
			'checkbox-field-mimic-has-value': value
		});
		const borderClasses = classnames('checkbox-border');


		return (
			<div className={containerClasses}>
				<div className={checkboxMimicClasses} onClick={this.onCheckboxClick}>
					<input name={name} className={checkboxClasses} id={id} type={type} onChange={this.onChange} value={value} />
				</div>
				{ label && <label className={labelClasses} htmlFor={id} ref={this.checkboxLabel}>{label}</label> }
				{ message && <span>{message}</span> }
			</div>
		);
	}
}

Checkbox.defaultProps = {
  name: '',
	type: 'checkbox',
  label: '',
  id: '',
  value: '',
}

module.exports = Checkbox;
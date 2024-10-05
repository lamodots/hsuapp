import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	placeholder: string;
	name: string;
	value: string;
};
function Input({ placeholder, name, value, ...props }: Props) {
	return (
		<input placeholder={placeholder} name={name} value={value} {...props} />
	);
}

export default Input;

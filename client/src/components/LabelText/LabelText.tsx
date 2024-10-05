import React from 'react';

type Props = React.LabelHTMLAttributes<HTMLLabelElement> & {
	label: string;
};
function LabelText({ label, ...props }: Props) {
	return <label {...props}>{label}</label>;
}

export default LabelText;

import React, { ReactNode } from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	title: string;
	loader?: ReactNode;
	handleClick?: () => void;
};
function Button({ title, loader, handleClick, ...props }: Props) {
	return (
		<button {...props} onClick={handleClick}>
			{title}
			{loader}
		</button>
	);
}

export default Button;

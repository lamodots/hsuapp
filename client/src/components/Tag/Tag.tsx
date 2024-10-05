type Props = {
	tagText: string;
	ready?: boolean;
};
function Tag({ tagText, ready, ...props }: Props) {
	return (
		<span
			className={
				ready
					? 'bg-blue-200 px-2 py-1 rounded-lg '
					: 'bg-red-500 px-2 py-1 rounded-lg'
			}
			{...props}
		>
			{tagText}
		</span>
	);
}

export default Tag;

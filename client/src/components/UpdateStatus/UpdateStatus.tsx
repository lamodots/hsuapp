import React from 'react';

type Props = {
	status?: string;
	handleClick: () => void;
};
function UpdateStatus({ handleClick }: Props) {
	return (
		<div className='bg-white rounded-md shadow-md'>
			<h3 className='p-4'>Update status</h3>
			<hr className='bg-neutral-400' />
			<div className='p-4'>
				<button
					className='border text-blue-950 font-medium text-sm'
					onClick={handleClick}
				>
					Ready
				</button>
				<button
					className='border text-red-900 font-medium text-sm'
					onClick={handleClick}
				>
					Not Ready
				</button>
			</div>
		</div>
	);
}

export default UpdateStatus;

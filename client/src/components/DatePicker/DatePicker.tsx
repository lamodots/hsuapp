import React from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { DateValueType } from 'react-tailwindcss-datepicker';

type Props = {
	value: DateValueType;
	handleChange: (
		value: DateValueType,
		e?: HTMLInputElement | null | undefined
	) => void;
};
export default function DatePicker({ value, handleChange }: Props) {
	return (
		<div className='flex justify-end absolute top-[222px] left-[9%] lg:left-[49%] bg-white px-4 py-6 rounded-md shadow-md'>
			<div className='w-full max-w-72'>
				<h3 className='text-sm text-zinc-950 mb-6'>Filter</h3>
				<p className='text-xs text-[#818181]'>Added From - Added Until</p>
				<div className='relative mt-3 border-2 border-[#f6f6f6] rounded-md'>
					<Datepicker
						popoverDirection='down'
						displayFormat='DD/MM/YYYY'
						value={value}
						onChange={handleChange}
					/>
				</div>
			</div>
		</div>
	);
}

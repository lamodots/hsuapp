import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen/SplashScreen';
import LabelText from '../components/LabelText/LabelText';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { toast } from 'react-toastify';
import List from '../components/List/List';
import UpdateStatus from '../components/UpdateStatus/UpdateStatus';
import { MdFilterList } from 'react-icons/md';
import Datepicker from 'react-tailwindcss-datepicker';
import DatePicker from '../components/DatePicker/DatePicker';
import { DateValueType } from 'react-tailwindcss-datepicker';
const data = [
	{
		id: '1',
		phone: '09060606060',
		status: 'ready',
	},
	{
		id: '2',
		phone: '07060606060',
		status: 'not ready',
	},
	{
		id: '3',
		phone: '08060606060',
		status: 'not ready',
	},
	{
		id: '4',
		phone: '09060606060',
		status: 'ready',
	},
	{
		id: '5',
		phone: '07060606060',
		status: 'not ready',
	},
	{
		id: '6',
		phone: '08060606060',
		status: 'not ready',
	},
	{
		id: '7',
		phone: '09060606060',
		status: 'ready',
	},
	{
		id: '8',
		phone: '07060606060',
		status: 'not ready',
	},
	{
		id: '9',
		phone: '08060606060',
		status: 'not ready',
	},
	{
		id: '10',
		phone: '09060606060',
		status: 'ready',
	},
	{
		id: '11',
		phone: '07060606060',
		status: 'not ready',
	},
	{
		id: '12',
		phone: '08060606060',
		status: 'not ready',
	},
];
// type DateValueType = {
// 	startDate: Date | null;
// 	endDate: Date | null;
// };
function Member() {
	const [loading, setLoading] = useState(true);
	const [phone, setPhone] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [value, setValue] = useState<DateValueType>({
		startDate: null,

		endDate: null,
	});
	const [showDate, setShowDate] = useState(false);

	// //splashscreen
	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setLoading(false);
	// 	}, 6000);

	// 	return () => clearTimeout(timer);
	// }, []);

	// if (loading) {
	// 	return (
	// 		<div>
	// 			<SplashScreen />
	// 		</div>
	// 	);
	// }

	// Handle form

	async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (isSubmitting) return;
		setIsSubmitting(true);
		//validate form
		if (!phone) {
			setIsSubmitting(false);
			return toast('Phone number can not be empty!');
		}
		// Validate phone number format with ReGX
		const pattern = /^(0)(7|8|9)(0|1)\d{8}$/;

		const result = pattern.test(phone);
		console.log(result);
		if (!result) {
			setIsSubmitting(false);
			return toast('Wrong format, dont include +234, 234 !');
		}

		try {
			// Simulate an API request (replace this with actual async logic)
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// Handle success (you can toast or update the state here)
			toast('Phone number is valid and submission is successful!');
		} catch (error) {
			// Handle error
			console.error(error);
			toast('An error occurred during submission.');
		} finally {
			// Reset the submitting state once the process is complete
			setIsSubmitting(false);
		}
	}

	// date picker

	return (
		<div className='  dom h-screen w-full  overflow-x-hidden  bg-[#f6f6f6] '>
			<header className='bg-purple-300  fixed w-full   pt-12  z-50'>
				<h2 className='text-center text-2xl text-zinc-950'>Members </h2>
				<div className='w-screen flex justify-center pt-8 px-4'>
					<div className='w-full max-w-[600px] flex items-center gap-4'>
						<form className='flex  flex-col w-full' onSubmit={handleSearch}>
							<LabelText
								label='Enter Phone Number'
								htmlFor='phone'
								className='mb-2 text-sm'
							/>
							<Input
								className='h-12 w-full  rounded-lg border-2 outline-none border-neutral-600 text-sm text-neutral-600 mb-8 pl-4 bg-[url("./assets/grad-bg.png")] bg-cover focus:border-purple-800'
								type='text'
								name='name'
								value={phone}
								onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
									setPhone(event.target.value)
								}
								placeholder='Search member number'
								id='phone'
							/>
						</form>
						<Button
							title='Filter'
							loader={<MdFilterList size={24} />}
							className='flex items-center px-4 gap-4 h-12 rounded-lg bg-purple-500 text-white font-bold text-sm'
							handleClick={() => setShowDate(!showDate)}
						/>
					</div>
				</div>
			</header>

			<main className=' relative w-screen flex flex-col items-center pt-64 gap-3 pb-48 px-4'>
				{data.map((data) => (
					<div className='  w-full max-w-[600px] ' key={data.id}>
						<List
							memberPhone={data.phone}
							status={data.status}
							userId={data.id}
						/>
					</div>
				))}
			</main>
			{showDate && (
				<DatePicker
					value={value}
					handleChange={(newValue: DateValueType) => setValue(newValue)}
				/>
			)}
		</div>
	);
}

export default Member;

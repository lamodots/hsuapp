import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen/SplashScreen';
import LabelText from '../components/LabelText/LabelText';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { toast } from 'react-toastify';

import Tag from '../components/Tag/Tag';

function Portal() {
	const [loading, setLoading] = useState(true);
	const [phone, setPhone] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

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
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 6000);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<div>
				<SplashScreen />
			</div>
		);
	}
	return (
		<div className='px-4  pt-24 w-dvw h-dvh overflow-hidden bg-[url("./assets/grad-bg.png")] bg-cover'>
			<header>
				<h2 className='text-center text-2xl text-zinc-950'>Log member phone</h2>
				<div className='flex justify-center'>
					<form
						className='flex  flex-col mt-12 w-full max-w-96'
						onSubmit={handleSearch}
					>
						<LabelText
							label='Enter Phone Number'
							htmlFor='phone'
							className='mb-2 text-sm'
						/>
						<Input
							type='text'
							name='name'
							value={phone}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
								setPhone(event.target.value)
							}
							placeholder='Enter member phone number'
							id='phone'
							className='h-12 rounded-lg border-2 outline-none border-neutral-600 text-sm text-neutral-600 mb-8 pl-4 bg-[url("./assets/grad-bg.png")] bg-cover focus:border-purple-800'
						/>
						<Button
							title={isSubmitting ? 'Logging ...' : 'Log'}
							type='submit'
							className='w-[191px] m-auto h-12 rounded-lg bg-purple-500 text-white font-bold'
						/>
					</form>
				</div>
			</header>
		</div>
	);
}

export default Portal;

import { useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

function AddModerator() {
	const [inputText, setInputText] = useState('');
	return (
		<div className='flex flex-col justify-center items-center h-dvh p-4 bg-[url("./assets/grad-bg.png")] bg-cover'>
			<div className='bg-white w-full max-w-[512px] p-8  rounded-lg shadow-sm'>
				<h2 className='text-2xl md:text-3xl mb-8 text-center text-[#080808]'>
					Add New Moderator
				</h2>
				<form className='flex flex-col gap-6 w-full   '>
					<Input
						name='inputText'
						value={inputText}
						onChange={(event) => setInputText(event.target.value)}
						placeholder='Add a moderator"s phone number'
						className='w-full h-12 rounded-lg border-2 outline-none border-neutral-600 text-sm text-neutral-600 mb-1 pl-4  bg-cover focus:border-purple-800'
					/>
					<Button
						title='Add Moderator'
						type='submit'
						className='w-[191px] m-auto h-12 rounded-lg bg-purple-500 text-white font-bold'
					/>
				</form>
			</div>
		</div>
	);
}

export default AddModerator;

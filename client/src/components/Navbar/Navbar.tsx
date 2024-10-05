import React from 'react';
import { HiHome, HiUserGroup } from 'react-icons/hi';
import { ImUserCheck } from 'react-icons/im';
import { MdAddModerator } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav className='flex justify-around items-center bg-white  shadow-2xl rounded-md w-full max-w-[600px] mx-auto h-16 md:max-w-[600px] md:mx-auto'>
			<NavLink
				to='/'
				className={({ isActive }) =>
					isActive
						? ' text-purple-500 flex flex-col items-center gap-1  font-bold'
						: 'flex flex-col items-center gap-1 text-[#172554] transition'
				}
			>
				<HiHome size={24} />
				<span className='text-xs'>Portal</span>
			</NavLink>
			<NavLink
				to='/members'
				className={({ isActive }) =>
					isActive
						? ' text-purple-500 flex flex-col items-center gap-1  font-bold'
						: 'flex flex-col items-center gap-1 text-[#172554] transition'
				}
			>
				<HiUserGroup size={24} />
				<span className='text-xs'>Members</span>
			</NavLink>
			<NavLink
				to='/add-moderator'
				className={({ isActive }) =>
					isActive
						? ' text-purple-500 flex flex-col items-center gap-1  font-bold'
						: 'flex flex-col items-center gap-1 text-[#172554] transition'
				}
			>
				<MdAddModerator size={24} />
				<span className='text-xs'>Add Moderator</span>
			</NavLink>
			<NavLink
				to='/check-id'
				className={({ isActive }) =>
					isActive
						? ' text-purple-500 flex flex-col items-center gap-1  font-bold'
						: 'flex flex-col items-center gap-1 text-[#172554] transition'
				}
			>
				<ImUserCheck size={24} />
				<span className='text-xs'>Check Id</span>
			</NavLink>
		</nav>
	);
}

export default Navbar;

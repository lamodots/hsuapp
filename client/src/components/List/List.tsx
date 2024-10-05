import { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { LiaEdit } from 'react-icons/lia';
import { GiConfirmed } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { MdOutlineDeleteOutline, MdOutlineClose } from 'react-icons/md';

type Props = {
	memberPhone: string;
	status: string;
	userId: string;
	handleClick?: () => void;
};
function List({ memberPhone, status, userId, ...props }: Props) {
	const [showMore, setShowMore] = useState(false);
	const handleShowMore = () => {
		setShowMore(!showMore);
	};
	const handleCloseShowMore = () => {
		setShowMore(false);
	};

	const handleReady = (userId: string) => {
		console.log(userId);
	};
	return (
		<>
			<div
				className='  flex items-center justify-between h-12 bg-white rounded-lg  p-3 w-full '
				{...props}
			>
				<span className='text-sm'>{memberPhone}</span>
				<span
					className={
						status === 'ready'
							? 'text-blue-950 text-sm bg-purple-100 px-3 py-1 rounded-md'
							: 'text-red-700 text-sm bg-rose-200 px-3 py-1 rounded-md'
					}
				>
					{status}
				</span>
				<button onClick={handleShowMore}>
					<HiDotsVertical size={24} />
				</button>
			</div>
			{showMore && (
				<div className='absolute right-[31%] translate-x-[69%] lg:right-[35%] lg:translate-x-[65%] bg-white rounded-l-lg rounded-b-lg shadow-lg w-48 transition delay-150 duration-150'>
					<div className=' flex justify-between border-b-2 border-b-[#808080] px-4  py-4'>
						<h4 className='text-left text-[#080808] text-xl '>Action</h4>
						<MdOutlineClose onClick={handleCloseShowMore} size={24} />
					</div>
					<div className='px-4  py-4 flex flex-col items-start  gap-6 max-w-40'>
						<button
							onClick={() => handleReady(userId)}
							className='flex gap-2 items-center text-sm'
						>
							<GiConfirmed size={24} />
							Mark Ready
						</button>
						<Link
							to={`/edit/${userId}`}
							className='flex gap-2 items-center text-sm'
						>
							<LiaEdit size={24} />
							Edit
						</Link>
						<button className='flex gap-2 items-center text-sm'>
							<MdOutlineDeleteOutline size={24} />
							Delete
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default List;

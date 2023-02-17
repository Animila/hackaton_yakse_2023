import React, { useEffect, useRef, useState } from 'react'

function Menu({ isActive, setIsActive }) {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const menu = [
		[
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='currentColor'
				class='w-6 h-6'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
				/>
			</svg>,
			'Главная',
			'#title',
		],
		[
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='currentColor'
				class='w-6 h-6'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
				/>
			</svg>,
			'Сотрудничество',
			'#client',
		],
		[
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='currentColor'
				class='w-6 h-6'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'
				/>
			</svg>,
			'Преимущества',
			'#perfect',
		],
		[
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='currentColor'
				class='w-6 h-6'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
				/>
			</svg>,
			'Отзывы',
			'#raters',
		],
		[
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='currentColor'
				class='w-6 h-6'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
				/>
			</svg>,
			'Выгода',
			'#money',
		],
		[
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='currentColor'
				class='w-6 h-6'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z'
				/>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z'
				/>
			</svg>,
			'До/После',
			'#next',
		],
		[
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='currentColor'
				class='w-6 h-6'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z'
				/>
			</svg>,
			'Чат-бот',
		],
	]

	const menuRef = useRef()

	useEffect(() => {
		const onClick = e => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', onClick)
		return () => {
			document.removeEventListener('mousedown', onClick)
		}
	}, [menuRef])
	return (
		<header>
			<div className='flex justify-between items-center px-3'>
				<a href='https://skillometer.ru'>
					<img src='/assets/logo.png' alt='' className='py-8 w-40' />
				</a>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='white'
					className='w-10 h-10'
					onClick={handleClick}
				>
					<path
						strokeLinecap='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			</div>
			{isOpen && (
				<nav
					ref={menuRef}
					className='fixed top-0 left-0 w-full pt-8 text-white bg-gray-800 flex flex-col justify-center pl-7 rounded-b-3xl '
				>
					{/* <img src='/assets/logo_menu.png' alt='' className='w-fit pb-[40px]' /> */}
					<ul className='self-start '>
						{menu.map(item => (
							<li className='pb-11'>
								<a
									href={item[2]}
									className='text-[20px] flex items-center cursor-pointer'
									onClick={() => {
										item[1] == 'Чат-бот'
											? setIsActive(!isActive)
											: setIsOpen(!isOpen)
									}}
								>
									{item[0]} <span className='ml-2'>{item[1]}</span>
								</a>
							</li>
						))}
					</ul>
				</nav>
			)}
		</header>
	)
}

export default Menu

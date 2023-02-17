import React, { useEffect, useRef, useState } from 'react'

function Menu({ isActive, setIsActive }) {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

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
				<img src='/assets/logo.png' alt='' className='py-8' />
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
					className='fixed top-0 left-0 w-full pt-8 text-white bg-gray-800 flex flex-col justify-center pl-7 rounded-b-3xl'
				>
					<img src='/assets/logo_menu.png' alt='' className='w-fit pb-[40px]' />
					<ul className='self-start '>
						<li className='pb-11'>
							<a href='#' className='text-[20px]'>
								Главная
							</a>
						</li>
						<li className='pb-11'>
							<a href='#' className='text-[20px]'>
								Сотрудничество
							</a>
						</li>
						<li className='pb-11'>
							<a href='#' className='text-[20px]'>
								Преимущества
							</a>
						</li>
						<li className='pb-11'>
							<a href='#' className='text-[20px]'>
								Отзывы
							</a>
						</li>
						<li className='pb-11'>
							<a href='#' className='text-[20px]'>
								Выгода
							</a>
						</li>
						<li className='pb-11'>
							<a href='#' className='text-[20px]'>
								До/После
							</a>
						</li>
						<li className='pb-11'>
							<a className='text-[20px]' onClick={() => setIsActive(!isActive)}>
								Чат-бот
							</a>
						</li>
					</ul>
				</nav>
			)}
		</header>
	)
}

export default Menu

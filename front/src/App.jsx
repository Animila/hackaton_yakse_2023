import React, { useEffect, useRef, useState } from 'react'
import Chat from './components/chat'

function App() {
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
		<div className='bg-[#16151B]'>
			<header className='flex justify-between items-center px-3'>
				<img src='/assets/logo.png' alt='' className='py-8' />
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='white'
					class='w-10 h-10'
					onClick={handleClick}
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			</header>

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
					</ul>
				</nav>
			)}

			<section>
				<h2 className='text-black font-bold dark:text-white text-center text-[32px]'>
					Хотите быть всегда в тренде?
				</h2>
				<h1 className='text-black font-bold dark:text-white text-center	text-4xl mt-2'>
					Вам к Skillometer!
				</h1>
				<div className='text-black font-bold dark:text-white text-center text-[14px] mt-4 px-4'>
					Используя возможности машинного обучения и основываясь на обширных
					данных рынка, наш сервис поможет вам построить удобную образовательную
					траекторию
				</div>
			</section>

			<section>
				<div className='w-100 mx-4 min-h-[492px] mt-20 rounded-3xl border-white border-2'>
					<div className='text-white flex flex-col justify-center pb-4'>
						<img
							src='/assets/info/hat.png'
							alt=''
							className='h-[90px] w-[90px] self-center'
						/>
						<h4 className='self-center text-xl'>321</h4>
						<p className='self-center text-xl font-normal pb-1'>
							Онлайн-школ разработчиков
						</p>
					</div>
					<div className='text-white flex flex-col justify-center pb-4'>
						<img
							src='/assets/info/people.png'
							alt=''
							className='h-[90px] w-[90px] self-center pb-1'
						/>
						<h4 className='self-center text-xl'>104 329</h4>
						<p className='self-center text-xl font-normal '>Обучающихся</p>
					</div>
					<div className='text-white flex flex-col justify-center'>
						<img
							src='/assets/info/house.png'
							alt=''
							className='h-[90px] w-[90px] self-center pb-1'
						/>
						<h4 className='self-center text-xl'>1 321 </h4>
						<p className='self-center text-xl font-normal'>Онлайн - курсов</p>
					</div>
				</div>

				<h3 className='text-white mt-16 text-center text-[30px]'>
					Варианты сотрудничества
				</h3>
				<div className='w-100 mx-4 min-h-[450px] mt-2 rounded-3xl border-white border-2'>
					<div className='text-white flex flex-col justify-center pb-4 pt-11'>
						<img
							src='/assets/various/arms.png'
							alt=''
							className='h-[90px] w-[90px] self-center'
						/>
						<h4 className='self-center text-[24px]'>Партнер</h4>
						<p className='self-center text-[10px] font-normal pb-1 text-[#96ADFF] underline'>
							оставить заявку
						</p>
					</div>
					<div className='text-white flex flex-col justify-center mt-[25px]'>
						<img
							src='/assets/various/people.png'
							alt=''
							className='h-[90px] w-[90px] self-center pb-1'
						/>
						<h4 className='self-center text-[24px]'>Стать разработчиком</h4>
						<p className='self-center text-[10px] font-normal text-[#96ADFF] underline'>
							оставить заявку
						</p>
					</div>
				</div>
			</section>

			<section>
				<div></div>
			</section>

			{/* <section>
				<div className='w-100 mx-4 h-[465px] mt-20 bg-[#343843] rounded-3xl pt-4 pb-5 p'>
					<h3 className='text-white text-2xl font-bold text-center px-3 '>
						Варианты сотрудничества по размещению онлайн-курсов
					</h3>
				</div>
			</section> */}
			<Chat />
		</div>
	)
}

export default App

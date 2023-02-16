import React from 'react'
import Chat from './components/chat'

function App() {
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
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			</header>

			<section>
				<h2 className='text-black font-bold dark:text-white text-center text-[26px]'>
					Хотите свой онлайн-курс?
				</h2>
				<h1 className='text-black font-bold dark:text-white text-center	text-4xl mt-5'>
					Вам к Skillometer!
				</h1>
				<div className='text-black font-bold dark:text-white text-center text-xl mt-4 px-3'>
					Используя возможности машинного обучения и основываясь на обширных
					данных рынка, наш сервис поможет вам построить удобную образовательную
					траекторию
				</div>
			</section>

			<section>
				<div className='w-100 mx-4 h-[465px] mt-20 bg-[#343843] rounded-3xl pt-4 pb-5 p'>
					<div className='text-white flex flex-col justify-center pb-4'>
						<img
							src='/assets/info/hat.png'
							alt=''
							className='h-[86px] w-[112px] self-center'
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
							className='h-[86px] w-[96px] self-center pb-1'
						/>
						<h4 className='self-center text-xl'>104 329</h4>
						<p className='self-center text-xl font-normal '>Обучающихся</p>
					</div>
					<div className='text-white flex flex-col justify-center'>
						<img
							src='/assets/info/house.png'
							alt=''
							className='h-[58px] w-[88px] self-center pb-1'
						/>
						<h4 className='self-center text-xl'>1 321 </h4>
						<p className='self-center text-xl font-normal'>Онлайн - курсов</p>
					</div>
				</div>
			</section>

			{/* <section>
				<div className='w-100 mx-4 h-[465px] mt-20 bg-[#343843] rounded-3xl pt-4 pb-5 p'>
					<h3 className='text-white text-2xl font-bold text-center px-3 '>
						Варианты сотрудничества по размещению онлайн-курсов
					</h3>
				</div>
			</section> */}
			<Chat/>
		</div>
	)
}

export default App

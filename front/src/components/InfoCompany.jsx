import React from 'react'

function InfoCompany() {
	return (
		<div className='w-100 mx-4 min-h-[492px] mt-10 rounded-3xl border-white border-2'>
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
	)
}

export default InfoCompany

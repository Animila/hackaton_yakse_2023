import React from 'react'

function Various(params) {
	return (
		<section>
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
	)
}

export default Various

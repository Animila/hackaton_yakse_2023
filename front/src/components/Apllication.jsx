import React, { useState } from 'react'

function Apllication() {
	const [isOpen, setIsOpen] = useState(false)

	function openModal() {
		setIsOpen(true)
		document.getElementsByTagName('html')[0].classList.add('overflow-y-hidden')
	}

	function closeModal() {
		setIsOpen(false)
		document
			.getElementsByTagName('html')[0]
			.classList.remove('overflow-y-hidden')
	}
	return (
		<div>
			{isOpen && (
				<div
					id='myModal'
					className='modal fixed z-50 inset-0 w-full h-full overflow-y-auto'
				>
					<div className='modal-overlay absolute w-full h-full bg-gray-900 opacity-50'></div>

					<div className='modal-container fixed w-full h-full z-50 overflow-y-auto'>
						<div className='modal-content container mx-auto w-full h-full flex justify-center items-center'>
							<div className='bg-white rounded shadow-lg p-8 m-4 max-w-xs max-h-full text-center'>
								<h1 className='text-xl font-bold mb-4'>Модальное окно</h1>
								<p className='mb-8'>
									Это модальное окно на Tailwind с затемненным фоном.
								</p>
								<button
									className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
									onClick={closeModal}
								>
									Закрыть модальное окно
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Apllication

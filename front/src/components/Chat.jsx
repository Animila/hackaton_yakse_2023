import React, { useState } from 'react'

function Chat({ isActive, setIsActive }) {
	const [message, setMessage] = useState('')
	const [history, setHistory] = useState([])

	const handleInputChange = event => {
		setMessage(event.target.value)
	}

	const handleSubmit = async event => {
		event.preventDefault()

		try {
			const response = await fetch('http://127.0.0.1:8000/api/chatbot', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ message }),
			}).then(response => response.json())
			if (!response) {
				throw new Error('Network response was not ok')
			}
			setHistory([
				...history,
				{ userMessage: message, botMessage: response.response },
			])
			setMessage('')
		} catch (error) {
			setHistory([
				...history,
				{ userMessage: message, botMessage: 'Сервер не вернул данные' },
			])
			setMessage('')
		}
	}

	return (
		<div className='fixed top-0 bg-black w-full flex flex-col px-10 pt-4 pb-10 h-full'>
			<div className='relative w-full h-10'>
				<h3 className='text-white text-center text-3xl'>Чат-бот</h3>
				<svg
					className='absolute right-0 top-[10%] w-8 h-8'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					color='white'
					onClick={() => setIsActive(!isActive)}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</div>

			<div className='relative overflow-scroll h-[100vh]'>
				{history.map((msg, i) => (
					<div>
						<div
							key={i}
							className='text-white text-right mt-3 bg-slate-800 w-full rounded-lg py-2 pr-3'
						>
							<span className='text-[10px]'>Пользователь</span>
							<p className='text-[14px]'>{msg.userMessage}</p>
						</div>
						<div
							key={i}
							className='text-white mt-3 bg-slate-700 w-full rounded-lg pl-2 py-2'
						>
							<span className='text-[10px]'>Бот</span>
							<p className='text-[14px]'>{msg.botMessage}</p>
						</div>
					</div>
				))}
			</div>
			<form onSubmit={handleSubmit} className='flex flex-col mx-2 mt-4'>
				<input
					type='text'
					value={message}
					onChange={handleInputChange}
					className='text-white mt-3 bg-slate-700 w-full rounded-lg pl-2 py-2 outline-none'
				/>
				<button
					type='submit'
					className='text-white dark:border-solid border-2 mt-2 rounded-lg'
				>
					Отправить
				</button>
			</form>
		</div>
	)
}

export default Chat

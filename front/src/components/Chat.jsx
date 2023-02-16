import React, { useState } from 'react'

function Chat() {
	const [message, setMessage] = useState('')
	const [response, setResponse] = useState('')

	const handleInputChange = event => {
		setMessage(event.target.value)
	}

	const handleSubmit = async event => {
		event.preventDefault()
		console.log(JSON.stringify({ message }))
		const response = await fetch('https://api.hackaton-yakse.ru/api/chatbot', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},

			body: JSON.stringify({ message }),
		}).then(res => res.json())
		console.log(response.response)
		setResponse(response.response)
	}

	return (
		<div className='flex flex-col mx-10 mt-4 pb-10'>
			<h3 className='text-white text-center text-3xl'>Чат-бот</h3>
			<form onSubmit={handleSubmit} className='flex flex-col mx-10 mt-4'>
				<input type='text' value={message} onChange={handleInputChange} />
				<button
					type='submit'
					className='text-white dark:border-solid border-2 border-red  mt-2'
				>
					Отправить
				</button>
			</form>
			{response && (
				<div className='text-white text-center mt-3'>{response}</div>
			)}
		</div>
	)
}

export default Chat

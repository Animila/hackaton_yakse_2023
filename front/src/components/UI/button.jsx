import React from 'react'

const Button = ({ children, ...props }) => {
	return (
		// добавление классов стилей
		<button
			{...props}
			className=' bg-[#30E0A1] rounded-2xl block mx-auto py-3 px-1 m'
		>
			{/*чтобы получить то, что есть в кнопке*/}
			{children}
		</button>
	)
}

export default Button

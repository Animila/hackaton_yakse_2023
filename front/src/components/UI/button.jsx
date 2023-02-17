import React from 'react'

const Button = ({ children, classes, ...props }) => {
	return (
		// добавление классов стилей
		<button
			{...props}
			className={classes}
		>
			{/*чтобы получить то, что есть в кнопке*/}
			{children}
		</button>
	)
}

export default Button

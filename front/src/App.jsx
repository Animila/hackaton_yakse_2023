import React, { useState } from 'react'
import Chat from './components/Chat'
import InfoCompany from './components/InfoCompany'
import Menu from './components/Menu'
import Title from './components/Title'
import Button from './components/UI/button'
import Various from './components/Various'

function App() {
	const [isActive, setIsActive] = useState(false)
	return (
		<div className='bg-[#16151B]'>
			<Menu isActive={isActive} setIsActive={setIsActive} />
			<Title />
			<Button>Присоединяйтесь к нам!</Button>
			<InfoCompany />
			<Various />

			{isActive && <Chat isActive={isActive} setIsActive={setIsActive} />}
		</div>
	)
}

export default App

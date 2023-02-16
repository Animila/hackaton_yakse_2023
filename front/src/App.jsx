import React from 'react'
import Chat from './components/chat'
import InfoCompany from './components/InfoCompany'
import Menu from './components/Menu'
import Title from './components/Title'
import Various from './components/Various'

function App() {
	return (
		<div className='bg-[#16151B]'>
			<Menu />
			<Title />
			<InfoCompany />
			<Various />

			<Chat />
		</div>
	)
}

export default App

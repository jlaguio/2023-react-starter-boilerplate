import './index.css'

import { Route, Routes } from 'react-router-dom'

import Home from '@collator/pages/Home'
import Sandbox from '@collator/pages/Sandbox'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sandbox" element={<Sandbox />} />
		</Routes>
	)
}

export default App

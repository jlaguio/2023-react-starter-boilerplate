import { Route, Routes } from 'react-router-dom'
import Home from './collator/pages/home/home'
import Sandbox from './collator/pages/sandbox/sandbox'
import './index.css'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sandbox" element={<Sandbox />} />
		</Routes>
	)
}

export default App

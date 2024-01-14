import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { Secured } from './views/Secured';
import { Table } from './views/Table';
import { Modal } from './components/Modal/Modal';
import { ModalContext } from './context/ModalContext';
import { Input } from './views/Input';
import './App.css';
import { Observer } from './views/Observer';

const App = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	return (
		<BrowserRouter>
			<ModalContext.Provider value={{ isModalOpen, setModalOpen }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/secure-link' element={<Secured />} />
					<Route path='/table' element={<Table />} />
					<Route path='/input' element={<Input />} />
					<Route path='/observer' element={<Observer />} />
				</Routes>
				<Modal isOpen={isModalOpen} setModalOpen={setModalOpen} />
			</ModalContext.Provider>
		</BrowserRouter>
	);
};

export default App;

import { Routes, Route } from 'react-router-dom';
import Member from './pages/Members';
import Portal from './pages/Portal';
import VerifyIdPage from './pages/VerifyIdPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './pages/Login/Login';
import AddModerator from './pages/AddModerator/AddModerator';
import Navbar from './components/Navbar/Navbar';
import NotFound from './pages/NotFound/NotFound';
function App() {
	return (
		<div>
			<Routes>
				<Route index path='/check-id' element={<VerifyIdPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<ProtectedRoute />}>
					<Route index element={<Portal />} />
					<Route path='/members' element={<Member />} />
					<Route path='/add-moderator' element={<AddModerator />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
			<div className=' fixed bottom-0 w-[90%] left-2/4 -translate-x-2/4'>
				<Navbar />
			</div>
		</div>
	);
}

export default App;

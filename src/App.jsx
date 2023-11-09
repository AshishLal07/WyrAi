import {Route, Routes} from 'react-router-dom';
import './App.css';
// import Layout from './Layout';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import CompanyDetails from './pages/CompanyDetails';
import Login from './pages/Login';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import UserMgt from './pages/UserMgt';
import AddUser from './container/AddUser';
import ProductOrder from './pages/ProductOrder';

// import PopupRoles from './container/PopupRoles';
// import PopupBranch from './container/PopupBranch';

function App() {
	return (
		<>
			<Routes>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/signIn" element={<Login />} />
				<Route path="/details" element={<CompanyDetails />} />

				<Route path="/" element={<Layout />}>
					<Route path="/dashboard" element={<Dashboard />}></Route>
					<Route path="/user" element={<UserMgt />}></Route>
					<Route path="/add" element={<AddUser />}></Route>
					<Route path="/test" element={<ProductOrder />}></Route>
				</Route>
				{/* <Route path="/" element={<Layout />}> */}
				{/* <Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route> */}
				{/* </Route> */}
			</Routes>
		</>
	);
}

export default App;

import './App.css';
import { Stack, Button, Box } from "@mui/material"
import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx"
import Dashboard from './components/Dashboard.jsx';
import {getAccessToken} from "./utils/getAccessToken.js"
import {getAccessTokenFromStorage} from "./utils/getAccessTokenFromStorage.js"
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
 
function App({spotifyApi}) {
	const [token, setToken] = useState(getAccessTokenFromStorage());

	useEffect(() => {
		const accessToken = getAccessTokenFromStorage() || getAccessToken();
		if(accessToken) {
			setToken(accessToken);
			sessionStorage.setItem("spotifyToken", accessToken);
			window.location.hash ="";
			

		}
	}, []);


	return (
		<Box className="App">
			{token ? (<Dashboard spotifyApi={spotifyApi}/>) : (
				<Routes>
					<Route path="*" element={<Login/>} />


				</Routes>


			)}
			
			
		</Box>
	);
}

export default App;

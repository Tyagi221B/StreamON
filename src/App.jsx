import { Routes, Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import MovieInformation from "./components/MovieInformation/MovieInformation";
import Actors from "./components/Actors/Actors";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
	return (
		<div>
    <CssBaseline/>
    <Navbar/>
			<main>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieInformation />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </main>
		</div>
	);
}

export default App;

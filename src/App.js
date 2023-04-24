import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './routes/Header/Header';
import Mercury from './routes/Mercury/Mercury';
import Venus from './routes/Venus/Venus';
import Earth from './routes/Earth/Earth';
import Mars from './routes/Mars/Mars';
import Jupiter from './routes/Jupiter/Jupiter';
import Saturn from './routes/Saturn/Saturn';
import Uranus from './routes/Uranus/Uranus';
import Neptune from './routes/Neptune/Neptune';
import SolarSystem from './routes/SolarSystem/SolarSystem';
import NotFound from './routes/NotFound/NotFound';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<SolarSystem />} />
				<Route path="mercury" element={<Mercury />} />
				<Route path="venus" element={<Venus />} />
				<Route path="earth" element={<Earth />} />
				<Route path="mars" element={<Mars />} />
				<Route path="jupiter" element={<Jupiter />} />
				<Route path="saturn" element={<Saturn />} />
				<Route path="uranus" element={<Uranus />} />
				<Route path="neptune" element={<Neptune />} />
				<Route path="*" element={<NotFound/>} />
			</Route>
		</Routes>
	);
}

export default App;

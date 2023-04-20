import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Mercury from './routes/Mercury/Mercury';
import Venus from './routes/Venus/Venus';
import Earth from './routes/Earth/Earth';
import Mars from './routes/Mars/Mars';
import Jupiter from './routes/Jupiter/Jupiter';
import Saturn from './routes/Saturn/Saturn';
import Uranus from './routes/Uranus/Uranus';
import Neptune from './routes/Neptune/Neptune';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<h1>home</h1>} />
				<Route path="mercury" element={<Mercury />} />
				<Route path="venus" element={<Venus />} />
				<Route path="earth" element={<Earth />} />
				<Route path="mars" element={<Mars />} />
				<Route path="jupiter" element={<Jupiter />} />
				<Route path="saturn" element={<Saturn />} />
				<Route path="uranus" element={<Uranus />} />
				<Route path="neptune" element={<Neptune />} />
				<Route path="*" element={<h2 style={{ textAlign: 'center', width: '100vw', color: 'white', marginTop: '100px' }}>404 not found</h2>} />
			</Route>
		</Routes>
	);
}

export default App;

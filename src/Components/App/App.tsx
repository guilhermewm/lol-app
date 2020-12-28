// REACT
import React, { lazy, Suspense } from 'react';

// ROUTER
import { Switch, Route, BrowserRouter } from 'react-router-dom'

// PAGINAS
const Home = lazy(() => import('pages/Home/Index'));
const NotFound = lazy(() => import('navigation/NotFound'));

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route component={NotFound} />
			</Switch>
			</Suspense>
		</BrowserRouter>
	)
}

export default App

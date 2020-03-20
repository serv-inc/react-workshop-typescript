import React from 'react';
import Counter from '../Counter';

const HomePage: React.FC = () => {
	return (
		<>
			<Counter name='hallo' />
			<Counter />
		</>
	)
}

export default HomePage;

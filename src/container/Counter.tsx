import React, { useState, useCallback } from 'react';

const Counter: React.FC<{ name?: string }> = ({ name = 'Wojtek' }) => {
	const [count, setCount] = useState<number>(0);

	const increment = useCallback(() => {
		setCount(prevCount => prevCount + 1);
	}, []);

	return (
	<button onClick={increment}>{name}: {count}</button>
	)
}

export default Counter;

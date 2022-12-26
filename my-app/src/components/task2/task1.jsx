import React from 'react';
import uuid from 'react-uuid';
import { useState } from 'react';
import { useEffect } from 'react';


export default function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	
	function add() {
		return setNotes([...notes, 6]);
	}

	useEffect(() => {
		add();
	}, []);

	const result = notes.map((note, index) => {
		return <p key={index}>{note}</p>;
	});


	// const result = add();
	return <div>
		{result}
	</div>
}

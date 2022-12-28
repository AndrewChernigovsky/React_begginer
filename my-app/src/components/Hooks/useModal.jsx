import React from "react"; 
import { useState } from "react";

export function useModal() {
	const [modal, setModal] = useState(false);
	console.log('useModal', modal)
	return { modal, setModal };
}
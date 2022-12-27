import React from "react"; 
import { useState } from "react";

export function useModal() {
	const [isopen, setIsOpen] = useState(false);
	return { isopen, setIsOpen };
}

import { useState } from 'react';
function Checkboxs({ item }) {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div className="checkbox-wrapper" key={item}>
			<label>
				{item}
				<input
					className='checkbox'
					type="checkbox"
					name={item}
					value={item}
					onChange={() => setIsChecked(!isChecked)}
					checked={isChecked}
				/>
			</label>
		</div>
	);
}

export default Checkboxs;

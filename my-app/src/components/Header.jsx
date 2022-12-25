import GoodCards from "./GoodComponents/GoodCards"
import Sidebar from "./GoodComponents/Sidebar"

function Header(props) {
	return <div>
		<div className='title'>
			<Sidebar />
			<GoodCards />
		</div>
	</div>
}

export default Header
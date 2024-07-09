import {Outlet} from 'react-router-dom';
import NavBar from '../components/navbar';

export function Layout(): JSX.Element {
	// TODO: utiliser l'auth context pour reccuperer le statut
	return (
		<>
		{/* <NavBar /> */}
			<div className="container">

				<Outlet/>
				
				{/* Le footer ici */}

			</div>
		</>
	);
}

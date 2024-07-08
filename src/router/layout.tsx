import {Outlet} from 'react-router-dom';

export function Layout(): JSX.Element {
	return (
		<>
		La navbar ici
			<div className="container">

				<Outlet/>
				
				Le footer ici

			</div>
		</>
	);
}

import { Toaster } from 'sonner';
import AppRouter from './router/router.tsx';


function App() {

	return (
		<main >
			<Toaster richColors position='top-right'/>
			<AppRouter/>
		</main>
	)
}

export default App

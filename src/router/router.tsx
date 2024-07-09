import { lazy, Suspense } from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { Layout } from './layout.tsx';
import { ErrorPage } from './error-page'
import { ProtectedRoute } from './protected-route.tsx';

const AuthPage = lazy(() => import('../pages/auth.page'));
const LandingPage = lazy(() => import('../pages/landing.page.tsx'));
const ChatApp = lazy(() => import('./../pages/chat2.tsx'));
const ShowcasePage = lazy(() => import('../pages/talents-showcase.page.tsx'));

const OrgsHome = lazy(() => import('../pages/orgs/home.tsx'));

export default function AppRouter() {
	const router = createBrowserRouter([
		{
			path: '',
			index: true,
			errorElement: <ErrorPage />,
			element: <LandingPage />,
		},
		{
			path: '/',
			errorElement: <ErrorPage />,
			element: <Layout />,
			children: [
				// pages non protegées
				

				{
					path: 'showcase',
					element: <ShowcasePage />,
				},

				{
					path: 'chat',
					element: <ChatApp />,
				},



				// Les routes concernant uniquement les entreprises
				{
					path: 'org',
					element: <ProtectedRoute />,
					errorElement: <ErrorPage />,
					children: [
						
						{
							path: '',
							index:true,
							element: <OrgsHome />,
						},
					]
				},

				

				// Les routes concernant uniquement les talents
				{
					path: 'talent',
					element: <ProtectedRoute />,
					errorElement: <ErrorPage />,
					children: [
						

					]
				}
			],
		},
		{
			path: 'auth',
			element: <AuthPage />,
			errorElement: <ErrorPage />,

		},

	])
	return <Suspense>
		<RouterProvider router={router} />
	</Suspense>
}



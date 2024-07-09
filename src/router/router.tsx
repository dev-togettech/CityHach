import { lazy, Suspense } from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { Layout } from './layout.tsx';
import { ErrorPage } from './error-page'
import { ProtectedRoute } from './protected-route.tsx';
import ProfileProvider from '../components/ProfileProvider.tsx';
import CompanyProfileComponet from '../components/CompagnyProfile.tsx';
import TrainingList from '../pages/orgs/CouseList/page.tsx';

const AuthPage = lazy(() => import('../pages/auth.page'));
const LandingPage = lazy(() => import('../pages/landing.page.tsx'));
const ShowcasePage = lazy(() => import('../pages/talents-showcase.page.tsx'));

export default function AppRouter() {
	const router = createBrowserRouter([
		{
			path: '/',
			errorElement: <ErrorPage />,
			element: <Layout />,
			children: [
				// pages non protegées
				{
					path: '',
					index: true,
					element: <LandingPage />,
				},

				{
					path: 'showcase',
					index: true,
					element: <ShowcasePage />,
				},


				
				// Les routes concernant uniquement les entreprises
				{
					path: 'org',
					element: <ProtectedRoute />,
					errorElement: <ErrorPage />,
					children: [
						

					]
				},

				

				// Les routes concernant uniquement les talents
				{
					path: 'talent',
					element: <ProtectedRoute />,
					errorElement: <ErrorPage />,
					children: [
						

					]
				},

				// Les routes concernant uniquement le profile des talents
				{
					path: 'Profile',
					element: <ProfileProvider  />,
					errorElement: <ErrorPage />,
					children: [
						

					]
				},


				// Les routes concernant uniquement le profile des Compagnies
				{
					path: 'compagnie',
					element: <CompanyProfileComponet  />,
					errorElement: <ErrorPage />,
					children: [
						

					]
				},
				// Les routes concernant uniquement le profile des Compagnies
				{
					path: 'courses',
					element: <TrainingList  />,
					errorElement: <ErrorPage />,
					children: [
						

					]
				}
			],
		},
		{
			path: 'auth',
			element: <AuthPage />,
		},

	])
	return <Suspense>
		<RouterProvider router={router} />
	</Suspense>
}



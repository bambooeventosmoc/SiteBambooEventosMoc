import { lazy } from 'react';
import { useRoutes } from "react-router-dom";

const HomePage = lazy(() => import('../pages/home/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/contatos', element: <ContactPage /> },
  { path: '*', element: <NotFound /> },
];

export function AppRoutes() {
  return useRoutes(routes);
}

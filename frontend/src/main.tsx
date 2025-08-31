import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/index.tsx'
import { Provider } from 'react-redux'
import { store } from '@/redux/store.ts'
import { ThemeProvider } from './providers/theme-provider.tsx'

import ToasterProvider from './providers/toaster-provider'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="library-ui-theme">
			<Provider store={store}>
				<ToasterProvider />
				<RouterProvider router={router} />
			</Provider>
		</ThemeProvider>
	</StrictMode>,
)

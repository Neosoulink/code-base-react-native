import 'react-native-gesture-handler';
import React from 'react';

// ROUTER
import Router from './router';

// PROVIDERS
import ReduxProvider from './components/Providers/Redux';
import PaperProvider from './components/Providers/Paper';
import AppProvider from './components/Providers/App';

export default function App() {
	return (
		<ReduxProvider>
			<PaperProvider>
				<AppProvider>
					<Router />
				</AppProvider>
			</PaperProvider>
		</ReduxProvider>
	);
}

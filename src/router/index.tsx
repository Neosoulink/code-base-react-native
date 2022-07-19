import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// STORE
import { useAppSelector } from '../hooks';
import { getGroup } from '../store/features/navigation';

// ROUTING
import STACK_ROUTES from './stack.routes';

// STYLES
import { GLOBAL_STYLE as GS } from '../assets/ts/styles';

const Stack = createNativeStackNavigator();

// NAVIGATION COMPONENT
const Router = ({}) => {
	// SELECTORS
	const CURRENT_ROUTE_GROUP = useAppSelector(getGroup);

	const Routes = () => {
		const safeGroup = CURRENT_ROUTE_GROUP || 'BLANK';

		return (
			<>
				{STACK_ROUTES[safeGroup].map((stackScreenProps, id) => (
					<Stack.Screen key={id} {...stackScreenProps} />
				))}
			</>
		);
	};

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					presentation: 'card',
					contentStyle: GS.bgLight,
				}}>
				{Routes()}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Router;

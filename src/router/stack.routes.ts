import { createNativeStackNavigator } from '@react-navigation/native-stack';

// TYPES
import { GroupNameType } from '../store/features/navigation/types';

// UTILS
import { getReactComponentProps } from '../helpers/utils';

// SCREENS
import DrawerNavigator from './BottomTabsNavigator';
import SCREENS from '../screens/index';

const STACK_SCREEN = createNativeStackNavigator().Screen;
const STACK_SCREEN_PROPS = getReactComponentProps(STACK_SCREEN);

// LOCAL TYPES
export type StackScreenType = typeof STACK_SCREEN_PROPS;
export type StackScreenGroupType = {
	[name in GroupNameType]: StackScreenType[];
};

const STACK_ROUTES_GROUPS: StackScreenGroupType = {
	APP: [
		{
			name: 'STACK/HOME',
			component: DrawerNavigator,
		},
	],
	BLANK: [
		{
			name: 'STACK/BLANK_',
			component: SCREENS.Blank_,
		},
	],
	LOADING: [
		{
			name: 'STACK/LOADING',
			component: SCREENS.Loading,
		},
	],
	REGISTRATION: [
		{
			name: 'STACK/SIGN_UP',
			component: SCREENS.REGISTRATION.SignUp,
		},
		{
			name: 'STACK/SIGN_IN',
			component: SCREENS.REGISTRATION.SignIn,
		},
		{
			name: 'STACK/FORGOT',
			component: SCREENS.REGISTRATION.Forgot,
		},
	],
	LANDING: [
		{
			name: 'STACK/WELCOME',
			component: SCREENS.LANDING.Welcome,
		},
	],
};

export default STACK_ROUTES_GROUPS;

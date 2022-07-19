import { createNativeStackNavigator } from '@react-navigation/native-stack';

// TYPES
import { GroupNameType } from '../store/features/navigation/types';

// UTILS
import { getReactComponentProps } from '../helpers/utils';

// SCREENS
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
			component: SCREENS.Home,
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
};

export default STACK_ROUTES_GROUPS;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import asyncStorage from '@react-native-async-storage/async-storage';

// TYPES
import type { RootState } from '../../index';
import type {
	NavigationStateType,
	NavigationGroupType,
	RoutesGroupType,
} from './types';

export const ROUTES_GROUPS: RoutesGroupType = {
	APP: 'APP',
	LOADING: 'LOADING',
	BLANK: 'BLANK',
};
const initialState: NavigationStateType = {
	group: ROUTES_GROUPS.LOADING,
};

export const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setGroup: (state, action: PayloadAction<NavigationGroupType>) => {
			state.group = action.payload;

			asyncStorage.setItem('navigation', JSON.stringify(state));
		},

		setShowLanding: (state, action: PayloadAction<boolean>) => {
			state.showLanding = action.payload;

			asyncStorage.setItem('navigation', JSON.stringify(state));
		},
	},
});

// ACTIONS
export const { setGroup, setShowLanding } = navigationSlice.actions;

// SELECTORS
export const getGroup = (state: RootState) => state.navigation.group;

export default navigationSlice.reducer;

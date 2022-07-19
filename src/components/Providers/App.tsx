import React from 'react';
import { setCustomTextInput, setCustomText } from 'react-native-global-props';

// STORE
import { setGroup, ROUTES_GROUPS } from '../../store/features/navigation';

// HOOKS
import { useAppDispatch } from '../../hooks';

// STYLES
import {
	CONSTANT_COLOR as CC,
	GLOBAL_STYLE as GS,
	CONSTANT_SIZE as CS,
} from '../../assets/ts/styles';

// LOCAL TYPES
export interface Props {
	children: React.ReactElement<any>;
}

const AppGuard: React.FC<Props> = (props) => {
	// DISPATCHER
	const dispatch = useAppDispatch();

	// EFFECTS
	// Init app route
	React.useEffect(() => {
		setTimeout(() => {
			dispatch(setGroup(ROUTES_GROUPS.APP));
		}, 3000);
	}, [dispatch]);

	// set default config for react-native components
	React.useEffect(() => {
		setCustomTextInput({
			style: {
				...GS.FF_Nunito,
				fontSize: CS.FONT_SIZE,
				color: CC.dark,
			},
		});

		setCustomText({
			style: {
				...GS.FF_Nunito,
				fontSize: CS.FONT_SIZE,
				color: CC.dark,
			},
		});
	}, []);

	return props.children;
};

export default AppGuard;

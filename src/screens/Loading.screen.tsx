import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// COMPONENTS
import { FocusAwareStatusBar } from '../components/Common';

// STYLES
import { GLOBAL_STYLE as GS } from '../assets/ts/styles';

export default ({}) => {
	return (
		<View style={{ ...GS.screen, ...GS.centered }}>
			<FocusAwareStatusBar
				barStyle="light-content"
				translucent={true}
				backgroundColor="transparent"
			/>

			<ActivityIndicator size="large" />
		</View>
	);
};

import React from 'react';
import { DefaultTheme, Provider } from 'react-native-paper';

// COMPONENTS
import { Icon } from '../Common';

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
export type PaperThemeType = typeof DefaultTheme;

const PAPER_THEME: PaperThemeType = {
	...DefaultTheme,
	dark: false,
	mode: 'adaptive',
	roundness: CS.SPACE_LG,
	colors: {
		...DefaultTheme.colors,
		primary: CC.primary,
		accent: CC.primaryLight,
		background: CC.light,
		surface: CC.white,
		onSurface: CC.mutedHighLight,
		disabled: CC.mutedLight,
		text: CC.dark,
		placeholder: CC.mutedLight,
		error: CC.danger,
	},
	fonts: {
		thin: GS.FF_NunitoExtraLight,
		light: GS.FF_NunitoLight,
		regular: GS.FF_Nunito,
		medium: GS.FF_NunitoSemiBold,
	},
};

const PaperProvider: React.FC<Props> = (props) => (
	<Provider
		theme={PAPER_THEME}
		settings={{ icon: (iconProps: any) => <Icon {...iconProps} /> }}>
		{props.children}
	</Provider>
);

export default PaperProvider;

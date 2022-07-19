import Icon_ from 'react-native-vector-icons/Feather';

// HELPERS
import { getReactComponentProps } from '../../helpers/utils';

const IconProps = getReactComponentProps(Icon_);

export type IconPropsType = typeof IconProps;
export type IconComponentType = typeof Icon_;
export type IconNameType = keyof typeof Icon_.glyphMap;

const Icon: IconComponentType = Icon_;

export default Icon;

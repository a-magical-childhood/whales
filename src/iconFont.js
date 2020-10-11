import { createIconSetFromFontello } from 'react-native-vector-icons';

// import fontelloConfig from '../whale-museum-logo/config.json';

// const Icon = createIconSetFromFontello(fontelloConfig, 'WhaleIcon');

const Icon = createIconSetFromFontello(require('../whale-museum-logo/config.json'), 'WhaleIcon', 'WhaleIcon')

export default Icon;
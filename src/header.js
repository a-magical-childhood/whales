import React from 'react';
import { Header } from 'react-native-elements';

import WhaleLogo from './logoIcon.js';

const header = () => {
    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'WhaleFinder', style: { color: '#fff' } }}
            rightComponent={<WhaleLogo />}
            containerStyle={{
                backgroundColor: 'rgba(34, 34, 34, 0.8)',
                zIndex: 2,
            }}
        />
    )
}

export default header;

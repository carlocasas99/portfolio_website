import { createGlobalStyle } from 'styled-components';

import LuloCleanW01OneBoldWoff from './LuloCleanW01OneBold.woff';
import LuloCleanW01OneBoldWoff2 from './LuloCleanW01OneBold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Lulo Clean';
        src: local('Lulo Clean'), local('LuloClean'),
        url(${LuloCleanW01OneBoldWoff}) format('woff'),
        url(${LuloCleanW01OneBoldWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;
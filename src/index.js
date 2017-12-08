if (process.env.NODE_ENV === 'libary') {
    require('../sass/mcs.scss');
}

import {multiColumnSelect} from './mcs/muti-column-select';
export {multiColumnSelect as default};

if (process.env.NODE_ENV === 'libary') {
    module.exports = multiColumnSelect;
}


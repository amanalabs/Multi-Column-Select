if (process.env.NODE_ENV === 'libary') {
    //load styles via webpack sass loader
    require ('../sass/mcs.scss');
}

import {Mcs} from "./mcs/muti-column-select";
export {Mcs as default}

if (process.env.NODE_ENV === 'libary') {
    module.exports = Mcs;
}


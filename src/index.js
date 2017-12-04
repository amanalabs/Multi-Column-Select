if (process.env.NODE_ENV === 'libary') {
    //load styles via webpack sass loader
    require ('../sass/mcs.scss');
}

import {Mcs}  from "./muti-column-select";
export class mutiColumnSelect extends Mcs{}
module.exports = mutiColumnSelect;
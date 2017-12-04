import {MCS} from "./mcs";



/**
 * Multi Column Select
 */
export class multiColumnSelect extends MCS{
    /**
     * Settings with defaults if not provided.
     * @param options
     */
    constructor(options){
        super(options);
    }

    /**
     * Destroy Multi-Column-Select.
     */
    destroy(){
       [].forEach.call(this.containers, function(container){
           container.remove();
       })
    }
}
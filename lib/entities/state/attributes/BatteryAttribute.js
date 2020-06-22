const Attribute = require("./Attribute");

class BatteryAttribute extends Attribute {
    /**
     * @param options {object}
     * @param options.level {number}
     * @param [options.metaData] {object}
     */
    constructor(options) {
        super(options);

        this.level = options.level;
    }
}


module.exports = BatteryAttribute;
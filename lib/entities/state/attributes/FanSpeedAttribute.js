const Attribute = require("./Attribute");

class FanSpeedAttribute extends Attribute {
    /**
     * @param options {object}
     * @param options.value {FanSpeedAttributeValue}
     * @param [options.customValue] {number}
     * @param [options.metaData] {object}
     */
    constructor(options) {
        super(options);

        this.value = options.value;

        if (options.customValue) {
            if(this.value === FanSpeedAttribute.VALUE.CUSTOM) {
                this.customValue = options.customValue;
            } else {
                throw new Error("Custom Fanspeed value requires Fanspeed Value CUSTOM")
            }
        } else if (this.value === FanSpeedAttribute.VALUE.CUSTOM) {
            throw new Error("Missing custom value for CUSTOM fanspeed")
        }
    }
}

/**
 *  @typedef {string} FanSpeedAttributeValue
 *  @enum {string}
 *
 */
FanSpeedAttribute.VALUE = Object.freeze({
    MIN: "min",
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
    MAX: "max",
    CUSTOM: "custom"
});



module.exports = FanSpeedAttribute;
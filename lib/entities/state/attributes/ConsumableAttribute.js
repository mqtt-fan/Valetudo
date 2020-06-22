const Attribute = require("./Attribute");

class ConsumableAttribute extends Attribute {
    /**
     * @param options {object}
     * @param options.type {ConsumableAttributeType}
     * @param [options.subType] {ConsumableAttributeSubType}
     * @param [options.metaData] {object}
     */
    constructor(options) {
        super(options);

        this.type = options.type;
        this.subType = options.subType || ConsumableAttribute.SUB_TYPE.NONE;
    }
}

/**
 *  @typedef {string} ConsumableAttributeType
 *  @enum {string}
 *
 */
ConsumableAttribute.TYPE = Object.freeze({
    FILTER: "filter",
    BRUSH: "brush",
    SENSOR: "sensor"
});

/**
 *  @typedef {string} ConsumableAttributeSubType
 *  @enum {string}
 *
 */
ConsumableAttribute.SUB_TYPE = Object.freeze({
    NONE: "none",
    MAIN: "main",
    SIDE_LEFT: "side_left",
    SIDE_RIGHT: "side_right"
});


module.exports = ConsumableAttribute;
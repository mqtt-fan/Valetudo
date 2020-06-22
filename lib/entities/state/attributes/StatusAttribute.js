const Attribute = require("./Attribute");

class StatusAttribute extends Attribute {
    /**
     * @param options {object}
     * @param options.value {StatusAttributeValue}
     * @param [options.flag] {StatusAttributeFlag}
     * @param [options.metaData] {object}
     */
    constructor(options) {
        super(options);

        this.value = options.value;
        this.flag = options.flag || StatusAttribute.FLAG.NONE;
    }

    get isActiveState() {
        return [
            StatusAttribute.VALUE.RETURNING,
            StatusAttribute.VALUE.CLEANING,
            StatusAttribute.VALUE.MANUAL_CONTROL
        ].includes(this.type);
    }
}

/**
 *  @typedef {string} StatusAttributeValue
 *  @enum {string}
 *
 */
StatusAttribute.VALUE = Object.freeze({
    ERROR: "error",
    DOCKED: "docked",
    IDLE: "idle",
    RETURNING: "returning",
    CLEANING: "cleaning",
    PAUSED: "paused",
    MANUAL_CONTROL: "manual_control",
    MOVING: "moving"
});

/**
 *  @typedef {string} StatusAttributeFlag
 *  @enum {string}
 *
 */
StatusAttribute.FLAG = Object.freeze({
    NONE: "none",
    ZONE: "zone",
    SECTION: "section",
    SPOT: "spot",
    TARGET: "target",
    RESUMABLE: "resumable"
});


module.exports = StatusAttribute;
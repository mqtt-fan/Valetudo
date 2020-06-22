const Attribute = require("./Attribute");

class PersistentMapSettingAttribute extends Attribute {
    /**
     * @param options {object}
     * @param options.value {PersistentMapSettingAttributeValue}
     * @param [options.metaData] {object}
     */
    constructor(options) {
        super(options);

        this.value = options.value;
    }
}

/**
 *  @typedef {string} PersistentMapSettingAttributeValue
 *  @enum {string}
 *
 */
PersistentMapSettingAttribute.VALUE = Object.freeze({
    DISABLED: "disabled",
    ENABLED: "enabled",
    MULTI: "multi" //TODO
});


module.exports = PersistentMapSettingAttribute;
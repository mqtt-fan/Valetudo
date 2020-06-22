const SerializableEntity = require("../../SerializableEntity");


class Attribute extends SerializableEntity {
    /**
     * @param options {object}
     * @param [options.metaData] {object}
     */
    constructor(options) {
        super();
        this.metaData = options.metaData || {};
    }
}

module.exports = Attribute;
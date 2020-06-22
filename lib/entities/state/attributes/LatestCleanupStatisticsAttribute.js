const Attribute = require("./Attribute");

class LatestCleanupStatisticsAttribute extends Attribute {
    /**
     * @param options {object}
     * @param options.type {LatestCleanupStatisticsAttributeType}
     * @param options.value {number}
     * @param [options.metaData] {object}
     */
    constructor(options) {
        super(options);

        this.type = options.type;
        this.value = options.value;
    }
}

/**
 *  @typedef {string} LatestCleanupStatisticsAttributeType
 *  @enum {string}
 *
 */
LatestCleanupStatisticsAttribute.TYPE = Object.freeze({
    AREA: "area",        //cm²
    DURATION: "duration" //seconds
});


module.exports = LatestCleanupStatisticsAttribute;
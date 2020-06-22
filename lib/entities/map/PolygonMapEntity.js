const MapEntity = require("./MapEntity");

class PolygonMapEntity extends MapEntity {
    /**
     *
     * @param options {object}
     * @param options.points {Array<number>}
     * @param options.type {PolygonMapEntityType}
     * @param [options.metaData] {object}
     */
    constructor(options) {
        super(options);
    }
}

/**
 *  @typedef {string} PolygonMapEntityType
 *  @enum {string}
 *
 */
PolygonMapEntity.TYPE = Object.freeze({
    ACTIVE_ZONES: "active_zones",
    NO_GO_AREAS: "no_go_areas"
});

module.exports = PolygonMapEntity;
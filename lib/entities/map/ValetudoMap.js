const SerializableEntity = require("../SerializableEntity");

/**
 * Represents a Valetudo standard issue map
 * including MapLayers and MapEntities
 *
 * Everything is int. Coordinates and size are in cm
 *
 * The origin is found on the bottom-left corner like a mathematical coordinate system
 *
 */
class ValetudoMap extends SerializableEntity {
    /**
     *
     * @param options {object}
     * @param options.size {object}
     * @param options.size.x {number}
     * @param options.size.y {number}
     * @param options.pixelSize {number} in cm
     * @param options.layers {Array<MapLayer>}
     * @param options.entities {Array<MapEntity>}
     */
    constructor(options) {
        super();

        this.size = options.size;
        this.pixelSize = options.pixelSize;
        this.layers = options.layers;
        this.entities = options.entities;
    }


    getIntersectingLayers(point) {
        //TODO
    }
}

module.exports = ValetudoMap;
const SerializableEntity = require("../SerializableEntity");

/**
 * This represents the state of a robot
 */
class RobotState extends SerializableEntity {
    /**
     *
     * @param options
     * @param options.map {ValetudoMap}
     * @param options.attributes {Array<Attribute>}
     */
    constructor(options) {
        super();

        this.map = options.map;
        this.attributes = options.attributes || [];
    }

    /**
     * @public
     *
     * @param options {object}
     * @param options.attributeClass {string}
     * @param [options.attributeType] {string}
     * @param [options.attributeSubType] {string}
     */
    hasMatchingAttribute(options) {
        return this.getMatchingAttributes(options).length > 0;
    }

    /**
     * @public
     *
     * @param options {object}
     * @param options.attributeClass {string}
     * @param [options.attributeType] {string}
     * @param [options.attributeSubType] {string}
     */
    getMatchingAttributes(options) {
        let needles = this.attributes.filter(e => e.constructor.name === options.attributeClass);

        if(options.attributeType) {
            needles = needles.filter(e => e.type === options.attributeType);

            if(options.attributeSubType) {
                return needles.filter(e => e.subType === options.attributeSubType);
            } else {
                return needles;
            }
        } else {
            return needles;
        }
    }

    /**
     * @public
     *
     * @param options {object}
     * @param options.attributeClass {string}
     * @param [options.attributeType] {string}
     * @param [options.attributeSubType] {string}
     */
    getFirstMatchingAttribute(options) {
        const index = this.getFirstMatchingAttributeIndex(options);

        if(index !== -1) {
            return this.attributes[index];
        } else {
            return null;
        }
    }

    /**
     * @public
     *
     * @param ctor {function}
     */
    getFirstMatchingAttributeByConstructor(ctor) {
        return this.getFirstMatchingAttribute({attributeClass: ctor.name});
    }

    /**
     * @public
     *
     * @param options {object}
     * @param options.attributeClass {string}
     * @param [options.attributeType] {string}
     * @param [options.attributeSubType] {string}
     */
    getFirstMatchingAttributeIndex(options) {
        return this.attributes.findIndex(e => {
            let matches = e.constructor.name === options.attributeClass;

            if(options.attributeType && matches) {
                matches = e.type === options.attributeType;
            }

            if(options.attributeSubType && matches) {
                matches = e.subType === options.attributeSubType;
            }

            return matches;
        })
    }

    /**
     * @param newAttribute {Attribute}
     */
    upsertFirstMatchingAttribute(newAttribute) {
        const index = this.getFirstMatchingAttributeIndex({
            attributeClass: newAttribute.__class,
            attributeType: newAttribute.type,
            attributeSubType: newAttribute.subType
        });

        if(index === -1) {
            this.attributes.push(newAttribute);
        } else {
            this.attributes[index] = newAttribute;
        }
    }
}

module.exports = RobotState;
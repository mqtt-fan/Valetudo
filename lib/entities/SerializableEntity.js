class SerializableEntity {
    constructor() {
        this.__class = this.constructor.name;
    }
}

module.exports = SerializableEntity;
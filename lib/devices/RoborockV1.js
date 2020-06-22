const Roborock = require("./Roborock");
const MiioVacuum = require("./MiioVacuum");
const NotImplementedError = require("./NotImplementedError");
const entities = require("../entities");

class RoborockV1 extends Roborock {
    detectFanSpeeds(msg_ver) {
        let fanSpeeds = {};

        fanSpeeds[entities.state.attributes.FanSpeedAttribute.VALUE.MIN] = 1;
        fanSpeeds[entities.state.attributes.FanSpeedAttribute.VALUE.LOW] = 38;
        fanSpeeds[entities.state.attributes.FanSpeedAttribute.VALUE.MEDIUM] = 60;
        fanSpeeds[entities.state.attributes.FanSpeedAttribute.VALUE.HIGH] = 75;
        fanSpeeds[entities.state.attributes.FanSpeedAttribute.VALUE.MAX] = 100;

        this.fanSpeeds = fanSpeeds;
    }

    /**
     * Set a new timer
     * @param cron {string}
     */
    async addTimer(cron) {
        return await this.sendCommand("set_timer", [[Date.now().toString(),[cron, ["",""]]]], {});
    }

    async savePersistentData(persistantData) {
        throw new NotImplementedError();
    }

    async setLabStatus(flag) {
        throw new NotImplementedError();
    }
}

module.exports = RoborockV1;
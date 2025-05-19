var EventBas = /** @class */ (function () {
    function EventBas(events) {
        if (events === void 0) { events = {
            'change-router': []
        }; }
        this.events = events;
    }
    EventBas.prototype.on = function (event, callback) {
        if (!this.events[event]) {
            this.events[event] = [callback];
            return;
        }
        this.events[event].push(callback);
    };
    EventBas.prototype.emit = function (event, data) {
        var _a;
        (_a = this.events[event]) === null || _a === void 0 ? void 0 : _a.forEach(function (callback) { return callback(data); });
    };
    EventBas.getInstance = function () {
        return this.instance || (this.instance = new EventBas());
    };
    return EventBas;
}());
export { EventBas };

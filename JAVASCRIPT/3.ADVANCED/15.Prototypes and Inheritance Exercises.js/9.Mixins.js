function createMixins() {

    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };
        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        };
        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)
        }
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.manafacture == this.keyboard.manafacture && this.manafacturer == this.monitor.manafacturer
        };
        classToExtend.prototype.isClasy = function () {
            return this.battery.expectedLife >= 3 && (this.color == "silver" || this.color == "black") && this.weight < 3;
        }
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}

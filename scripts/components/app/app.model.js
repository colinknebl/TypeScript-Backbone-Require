var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../_classes/model"], function (require, exports, model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppModel = (function (_super) {
        __extends(AppModel, _super);
        function AppModel() {
            return _super.call(this) || this;
        }
        AppModel.prototype.initialize = function () {
        };
        return AppModel;
    }(model_1.default));
    exports.default = AppModel;
});

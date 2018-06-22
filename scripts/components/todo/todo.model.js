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
    var Todo = (function (_super) {
        __extends(Todo, _super);
        function Todo(options) {
            var _this = _super.call(this, options) || this;
            _this.userId = options.userId;
            _this.id = options.id;
            _this.title = options.title;
            _this.completed = options.completed;
            return _this;
        }
        Todo.prototype.initialize = function (options) {
        };
        Todo.prototype.render = function () {
            return this;
        };
        return Todo;
    }(model_1.default));
    exports.default = Todo;
});

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
define(["require", "exports", "mustache", "../../_classes/view"], function (require, exports, Mustache, view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TodoView = (function (_super) {
        __extends(TodoView, _super);
        function TodoView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = $('#todo_template').html();
            return _this;
        }
        TodoView.prototype.initialize = function (options) {
        };
        TodoView.prototype.render = function () {
            var html = Mustache.render(this.template, this.model.toJSON());
            this.$el.html(html);
            return this;
        };
        return TodoView;
    }(view_1.default));
    exports.default = TodoView;
});

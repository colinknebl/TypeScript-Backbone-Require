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
define(["require", "exports", "../../_classes/view", "./app.model", "tpl!./app.tpl.html", "../todo/todos.collection", "../todo/todo.model", "../todo/todo.view"], function (require, exports, view_1, app_model_1, template, todos_collection_1, todo_model_1, todo_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppView = (function (_super) {
        __extends(AppView, _super);
        function AppView(options) {
            var _this = _super.call(this, options) || this;
            _this.model = new app_model_1.default();
            _this.AppData = options.AppData;
            return _this;
        }
        AppView.prototype.initialize = function (options) {
            console.log(this);
        };
        AppView.prototype.getCollection = function () {
            var _this = this;
            var collection = new todos_collection_1.default();
            collection.fetch()
                .then(function (res) {
                return res.map(function (todo) {
                    var todoModel = new todo_model_1.default({
                        userId: todo.userId,
                        id: todo.id,
                        title: todo.title,
                        completed: todo.completed
                    });
                    return todoModel;
                });
            })
                .then(function (data) {
                data.map(function (todo) {
                    var todoView = new todo_view_1.default({
                        model: todo
                    });
                    _this.AppData.appViewManager.registerSubView(todoView);
                    _this.$el.append(todoView.render().$el);
                });
            });
        };
        AppView.prototype.render = function () {
            this.$el.html(template());
            return this;
        };
        return AppView;
    }(view_1.default));
    exports.default = AppView;
});

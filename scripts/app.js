define(["require", "exports", "underscore", "backbone", "./_classes/appViewManager", "./_classes/view", "./_classes/model", "./components/app/app.view"], function (require, exports, _, Backbone, appViewManager_1, view_1, model_1, app_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initialize = function () {
        view_1.default.prototype.close = function () {
            this.remove();
            this.unbind();
            if (this.onClose) {
                this.onClose();
            }
        };
        var appViewManager = new appViewManager_1.default();
        var AppState = Backbone.Model.extend({
            defaults: {
                questions: {}
            }
        });
        var state = new AppState();
        var Router = Backbone.Router.extend({
            initialize: function () {
                this.AppData = {
                    eventBus: _.extend({}, Backbone.Events),
                    router: this,
                    state: state,
                    appViewManager: appViewManager
                };
                model_1.default.prototype.AppData = this.AppData;
            },
            routes: {
                '': 'default',
                '*path': 'default'
            },
            default: function () {
                var view = new app_view_1.default({
                    el: '#App',
                    AppData: this.AppData
                });
                appViewManager.registerAppView(view).render();
                view.getCollection();
            },
            start: function () {
                Backbone.history.start({
                    pushState: true,
                    root: '/'
                });
            }
        });
        var router = new Router();
        router.start();
    };
});

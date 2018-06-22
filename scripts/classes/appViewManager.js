define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppViewManager = (function () {
        function AppViewManager() {
            this.subViews = [];
        }
        AppViewManager.prototype.registerAppView = function (view) {
            if (this.currentView) {
                this.currentView.close();
            }
            if (this.subViews.length > 0) {
                this.subViews.forEach(function (view) { return view.close(); });
                this.subViews = [];
            }
            this.currentView = view;
            return view;
        };
        AppViewManager.prototype.registerSubView = function (subView) {
            this.subViews.push(subView);
            return subView;
        };
        AppViewManager.prototype.renderView = function (view) {
            view.render();
            return view;
        };
        return AppViewManager;
    }());
    exports.default = AppViewManager;
});

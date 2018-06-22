import * as $ from 'jquery';
import * as _ from 'underscore';
import * as Backbone from 'backbone';
import AppViewManager from './_classes/appViewManager';
import View from './_classes/view';
import Model from './_classes/model';
import AppView from './components/app/app.view'

export const initialize = () => {

  View.prototype.close = function(){
    this.remove();
    this.unbind();
    if (this.onClose) { this.onClose() }
  }


  let appViewManager = new AppViewManager()


  // initialize state
  const AppState = Backbone.Model.extend({
    defaults: {
      questions: {}
    }
  })
  let state = new AppState()
  
  // initialize router
  const Router = Backbone.Router.extend({

    initialize: function() {
      this.AppData = {
        eventBus: _.extend({}, Backbone.Events),
        router: this,
        state: state,
        appViewManager: appViewManager
      }
      Model.prototype.AppData = this.AppData


    },

    routes: {
      '': 'default',
      '*path': 'default'
    },

    default: function() {
      let view = new AppView({
        el: '#App',
        AppData: this.AppData
      })
      appViewManager.registerAppView(view).render()
      view.getCollection()
    },

    start: function() {
      Backbone.history.start({ 
        pushState: true,
        root: '/'
      })
    }
  })
  let router = new Router()
  router.start()
}


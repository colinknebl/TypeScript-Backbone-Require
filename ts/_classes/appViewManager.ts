import * as $ from 'jquery';
import View from './view'

export default class AppViewManager {
  subViews: Array<View>;
  currentView: View;

  constructor() {
    this.subViews = []
  }
  registerAppView(view:View) {
    if (this.currentView) {
      this.currentView.close()
    }
    if (this.subViews.length > 0) {
      this.subViews.forEach((view:any) => view.close())
      this.subViews = []
    }
    this.currentView = view
    // this.renderView(this.currentView)
    // $('#App').html(this.currentView.$el)
    return view
  }
  registerSubView(subView:View) {
    this.subViews.push(subView)
    return subView
  }
  renderView(view:View) {
    view.render()
    return view
  }
}
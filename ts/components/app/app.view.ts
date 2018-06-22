import * as $ from 'jquery';
import * as _ from 'underscore';
import * as Backbone from 'backbone';
import View from '../../_classes/view';
import AppModel from './app.model';
import * as template from 'tpl!./app.tpl.html';
import TodosCollection from '../todo/todos.collection';
import TodoModel from '../todo/todo.model';
import TodoView from '../todo/todo.view';
import TodoInterface from '../../_interfaces/todo.interface';

export default class AppView extends View {
  AppData:any;
  el:any;

  constructor(options:any) {
    super(options)
    this.model = new AppModel()
    this.AppData = options.AppData;
  }

  initialize(options:any) {
    // console.log('initialize', options);
    console.log(this);
  }

  getCollection() {

    let collection = new TodosCollection()
    collection.fetch()
      .then(res => {
        return res.map((todo:TodoInterface) => {
          let todoModel = new TodoModel({
            userId: todo.userId,
            id: todo.id,
            title: todo.title,
            completed: todo.completed
          })
          return todoModel
        })
      })
      .then(data => {
        data.map((todo:TodoInterface) => {
          let todoView = new TodoView({
            model: todo
          })
          this.AppData.appViewManager.registerSubView(todoView)
          this.$el.append(todoView.render().$el)
        })
      })
  }

  render():View {
    this.$el.html(template())
    return this
  }
}
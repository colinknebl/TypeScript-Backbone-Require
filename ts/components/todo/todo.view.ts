import * as Mustache from 'mustache';
import View from '../../_classes/view';
import TodoInterface from '../../_interfaces/todo.interface';

export default class TodoView extends View {
  template:string;

  constructor(options:any) {
    super(options)

    this.template = $('#todo_template').html()
  }

  initialize(options:any) {

  }

  render():View {
    let html = Mustache.render(this.template, this.model.toJSON())
    this.$el.html(html)

    return this;
  }
}
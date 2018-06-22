import Model from '../../_classes/model';
import TodoInterface from '../../_interfaces/todo.interface';

export default class Todo extends Model {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  constructor(options:TodoInterface) {
    super(options)
    this.userId = options.userId
    this.id = options.id
    this.title = options.title
    this.completed = options.completed
  }

  initialize(options:TodoInterface) {

  }

  render() {


    
    return this
  }
}
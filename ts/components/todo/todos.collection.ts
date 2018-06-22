import Collection from '../../_classes/collection';

export default class TodosCollection extends Collection {
  url:string;
  
  constructor() {
    super()

    this.url = 'https://jsonplaceholder.typicode.com/todos';
  }

}
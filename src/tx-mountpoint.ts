//import const logger = require('logging');
import createLogger from 'logging'; 
const logger = createLogger('TxComponent');
import { EventEmitter } from 'events';

class DispatcherTasksEmmiter extends EventEmitter {
  constructor() {
    super();
  } 

  subscribe(method) {
    this.on('tasks', method);
  }

  next(data) {
    this.emit('tasks', data);
  }
}

class DispatcherReplyEmmiter extends EventEmitter {
  constructor() {
    super();
  } 

  subscribe(method) {
    this.on('reply', method);
  }

  next(data) {
    this.emit('reply', data);
  }
}

export class TxMountPoint {
  _name: string;
  _tasks = null;
  _reply = null;

  constructor(_name) {
    this._name = _name;
    this._tasks = new DispatcherTasksEmmiter();
    this._reply = new DispatcherReplyEmmiter();
  }

  get name() {
    return this._name;
  }

  get tasks() {
    return this._tasks;
  }

  get reply() {
    return this._reply;
  }

}



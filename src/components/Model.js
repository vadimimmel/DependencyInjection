export class TaskModel {
	constructor() {
			this.tasks = [];
			this.listeners = [];
	}

	addTask(task) {
			this.tasks.push(task);
			this.notify();
	}

	removeTask(index) {
			this.tasks.splice(index, 1);
			this.notify();
	}

	getTasks() {
			return this.tasks;
	}

	subscribe(listener) {
			this.listeners.push(listener);
	}

	notify() {
			this.listeners.forEach(listener => listener(this.tasks));
	}
}

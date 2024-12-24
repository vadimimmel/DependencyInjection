export class TaskController {
	constructor(taskModel) {
			this.taskModel = taskModel;
	}

	addTask(task) {
			if (task.trim()) {
					this.taskModel.addTask(task);
			}
	}

	removeTask(index) {
			this.taskModel.removeTask(index);
	}
}

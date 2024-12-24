class DependencyContainer {
	constructor() {
			this.dependencies = new Map();
	}

	register(key, dependency) {
			this.dependencies.set(key, dependency);
	}

	resolve(key) {
			return this.dependencies.get(key);
	}
}

export const container = new DependencyContainer();

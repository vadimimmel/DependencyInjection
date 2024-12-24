import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { TaskController } from "./components/Controller";
import { container } from "./components/DependencyInjection";
import { TaskModel } from "./components/Model";
import './index.css';

const model = new TaskModel();
container.register("TaskModel", model);
const controller = new TaskController(container.resolve("TaskModel"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App model={container.resolve("TaskModel")} controller={controller} />
  </React.StrictMode>
);

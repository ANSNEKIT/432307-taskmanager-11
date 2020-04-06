// eslint-disable-next-line no-unused-expressions
`use strict`;

const TASK_COUNT = 3;

import {createSiteMenuTemplate} from './components/menu.js'; // меню
import {createFilterTemplate} from './components/filter.js'; // фильтры
import {createBoardTemplate} from './components/board.js'; // сортировка
import {createTaskEditTemplate} from './components/taskEdit.js'; // карточка с редактированием
import {createTaskTemplate} from './components/task.js'; // карточка задачи
import {createLoadMoreButtonTemplate} from './components/loadMoreButton.js'; // карточка задачи

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(taskListElement, createTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);

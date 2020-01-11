import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Task from './Task';

//This default export tells Storybook about the component we are documenting.
export default {
  component: Task,
  title: 'Task',
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,    // In this file exclude taskData and actionsData
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

//Actions help you verify interactions when building UI components in isolation
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

//There are 3 stories (Default, Pinned, Archived) below for Task Component
//Story is nothing but a possible state for a component
export const Default = () => {
  return <Task task={object('task',{ ...taskData })} {...actionsData} />;
};

export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />;

export const Archived = () => (
  <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
);
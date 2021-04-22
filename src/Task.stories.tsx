import React from 'react'
import {Task} from "./Task";
// @ts-ignore
import {action} from "@storybook/addon-actions/";

export default {
    title: 'Task Component',
    component: Task

}
const changeTaskStatusCallback = action('Status changed')
const removeTaskCallback = action('Task removed')
const changeTaskTitleCallback = action('Title changed')


export const TaskBaseExample = () => {
    return <>
        <Task
            removeTask={removeTaskCallback}
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            task={{id: '1', isDone: true, title: 'CSS'}}
            todolistId={'todolistId1'}
        />
        <Task
            removeTask={removeTaskCallback}
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            task={{id: '2', isDone: false, title: 'JS'}}
            todolistId={'todolistId2'}
        />
    </>
}
import React from 'react'
import {AddItemForm} from "./AddItemForm";
// @ts-ignore
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";

export default {
    title: 'EditableSpan Component',
    component: EditableSpan

}
const changeCallback = action('Value changed')
export const EditableSpanBaseExample = () => <EditableSpan value={'Start value'} onChange={changeCallback}/>
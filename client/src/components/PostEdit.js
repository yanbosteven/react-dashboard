import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'ra-ui-materialui'
export const PostEdit = (props) => {
    return (
        <Edit title = "Edit a Post" {...props}>
            <SimpleForm>
                <TextInput disabled source = 'id' />
                <TextInput source = 'title' />
                <TextInput multiline source = 'body' />
                <DateInput label = "published" source = "publishedAt" />
            </SimpleForm>
            
        </Edit>
    )
}

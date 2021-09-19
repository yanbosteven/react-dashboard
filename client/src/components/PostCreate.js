import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'ra-ui-materialui'
export const PostCreate = (props) => {
    return (
        <Create title = "Create a Post" {...props}>
            <SimpleForm>
                <TextInput source = 'title' />
                <TextInput multiline source = 'body' />
                <DateInput label = "published" source = "publishedAt" />

            </SimpleForm>
            
        </Create>
    )
}

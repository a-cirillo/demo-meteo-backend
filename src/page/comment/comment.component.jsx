import React from 'react';

import { useMediaQuery } from '@material-ui/core';
import {
    Filter,
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
    SelectInput,
    Create,
    SimpleList
} from 'react-admin';

const CommentFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="name" alwaysOn />
        <ReferenceInput label="Post" source="postId" reference="posts" allowEmpty>
            <SelectInput optionText="title" />
        </ReferenceInput>
    </Filter>
);

export const CommentList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <List filters={<CommentFilter/>} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.body}
                    secondaryText={record => `${record.email} author`}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="Post" source="postId" reference="posts">
                        <TextField source="title" />
                    </ReferenceField>
                    <TextField source="name" />
                    <TextField source="body" />
                    <TextField source="email" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    )
};
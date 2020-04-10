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


export const NewsList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.body}
                    secondaryText={record => `${record.email} author`}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="color" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    )
};
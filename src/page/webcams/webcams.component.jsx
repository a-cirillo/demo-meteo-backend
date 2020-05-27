import React from 'react';
// import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
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
    SimpleList,
    ImageField
} from 'react-admin';

import CustomUrlField from '../../components/custom-url-field/custom-url-field.component';

const WebcamTitle = ({ record }) => {
 return <span>Post {record ? `"${record.name}"` : ''}</span>;
};

const WebcamFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Name" source="name" alwaysOn />
        <TextInput label="Lid" source="lid" />
        <TextInput label="Source" source="source" />
    </Filter>
);

export const WebcamList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <List filters={<WebcamFilter/>} exporter={false} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.wid}
                    secondaryText={record => `${record.name}`}
                />
            ) : (
                <Datagrid>
                    <TextField label="Wid" source="id"/>
                    <TextField source="lid" />
                    <TextField source="name" />
                    <TextField source="description" />
                    <CustomUrlField source="url" />
                    <TextField source="source" />
                    <ImageField label="Preview" source="image" title="title" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    )
};

export const WebcamEdit = props => (
    <Edit title={<WebcamTitle />} {...props}>
        <SimpleForm redirect={"/webcams"}>
            <TextInput source="lid" />
            <TextInput source="name" />
            <TextInput multiline source="description" />
            <TextInput source="url" />
            <TextInput source="image" />
            <TextInput source="source" />
        </SimpleForm>
    </Edit>
);

export const WebcamCreate = props => (
    <Create {...props}>
        <SimpleForm redirect={"/webcams"}>
            <TextInput source="lid" />
            <TextInput source="name" />
            <TextInput multiline source="description" />
            <TextInput source="url" />
            <TextInput source="image" />
            <TextInput source="source" />
        </SimpleForm>
    </Create>
);

/*
redirect={"/webcams"}*/

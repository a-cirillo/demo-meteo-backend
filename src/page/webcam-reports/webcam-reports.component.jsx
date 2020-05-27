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
import CustomButton from '../../components/custom-button/custom-button.component';

const WebcamReportsTitle = ({ record }) => {
 return <span>Post {record ? `"${record.name}"` : ''}</span>;
};

const WebcamReportsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Url della webcam" source="url_webcam" />
        <TextInput label="Sito web che ospita la webcam" source="url_site" />
        <TextInput label="Lid" source="lid" />
        <TextInput label="Località" source="locality" />
        <TextInput label="Email segnalatore" source="email" />
    </Filter>
);

export const WebcamReportsList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <List filters={<WebcamReportsFilter/>} exporter={false} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.id}
                    secondaryText={record => `${record.url_webcam}`}
                />
            ) : (
                <Datagrid>
                    <TextField source="id"/>
                    <TextField source="lid" />
                    <CustomUrlField label="Url della webcam" source="url_webcam" />
                    <CustomUrlField label="Sito web che ospita la webcam" source="url_site" />
                    <TextField label="Località" source="locality" />
                    <TextField label="Email segnalatore" source="email" />
                    <CustomButton />
                </Datagrid>
            )}
        </List>
    )
};

export const WebcamReportsEdit = props => (
    <Edit title={<WebcamReportsTitle />} {...props}>
        <SimpleForm redirect={"/webcams"}>
            <TextInput source="lid" />
            <TextInput source="name" />
            <TextInput source="url" />
            <TextInput source="image" />
            <TextInput source="source" />
            <TextInput source="status" />
        </SimpleForm>
    </Edit>
);

export const WebcamReportsCreate = props => (
    <Create {...props}>
        <SimpleForm redirect={"/webcams"}>
            <TextInput source="lid" />
            <TextInput source="name" />
            <TextInput multiline source="description" />
            <TextInput source="url" />
            <TextInput source="image" />
            <TextInput source="source" />
            <TextInput source="status" />
        </SimpleForm>
    </Create>
);

/*
redirect={"/webcams"}*/

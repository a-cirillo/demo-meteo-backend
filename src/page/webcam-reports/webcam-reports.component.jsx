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
 return <span>Record {record ? `"${record.name}"` : ''}</span>;
};

const WebcamReportsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="LID" source="lid" />
        <TextInput label="Location" source="locality" />
        <TextInput label="Reporter email" source="email" />
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
                    <TextField label="RID" source="id"/>
                    <TextField label="LID" source="lid" />
                    <TextField label="Location" source="locality" />
                    <TextField label="Reporter email" source="email" />
                    <CustomUrlField label="Webcam URL" source="url_webcam" />
                    <CustomUrlField label="Source website" source="url_site" />
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

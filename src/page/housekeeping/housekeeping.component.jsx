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
    ImageField,
    ChipField
} from 'react-admin';

import CustomUrlField from '../../components/custom-url-field/custom-url-field.component';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    style: {
        color: 'white',
        backgroundColor: '#cc2c51'
    },
});

const StatusField = props => {
    const classes = useStyles();
    return <ChipField className={classes.style} {...props} />;
};

const HousekeepingTitle = ({ record }) => {
 return <span>Post {record ? `"${record.name}"` : ''}</span>;
};

const HousekeepingFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Name" source="name" alwaysOn />
        <TextInput label="LID" source="lid" />
        <TextInput label="Source" source="source" />
        <TextInput label="Status" source="status" />
    </Filter>
);

export const HousekeepingList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <List filters={<HousekeepingFilter/>} exporter={false} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.wid}
                    secondaryText={record => `${record.name}`}
                />
            ) : (
                <Datagrid>
                    <TextField label="WID" source="id"/>
                    <TextField label="LID" source="lid" />
                    <StatusField source="status"/>
                    <TextField source="name" />
                    <CustomUrlField label="URL" source="url" />
                    <TextField source="source" />
                    <ImageField label="Preview" source="image" title="title" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    )
};

export const HousekeepingEdit = props => (
    <Edit title={<HousekeepingTitle />} {...props}>
        <SimpleForm redirect={"/webcams"}>
            <TextInput source="lid" />
            <TextInput source="name" />
            <TextInput label="URL" source="url" />
            <TextInput source="image" />
            <TextInput source="source" />
            <TextInput source="status" />
        </SimpleForm>
    </Edit>
);

export const HousekeepingCreate = props => (
    <Create {...props}>
        <SimpleForm redirect={"/webcams"}>
            <TextInput source="lid" />
            <TextInput source="name" />
            <TextInput multiline source="description" />
            <TextInput label="URL" source="url" />
            <TextInput source="image" />
            <TextInput source="source" />
            <TextInput source="status" />
        </SimpleForm>
    </Create>
);

/*
redirect={"/webcams"}*/

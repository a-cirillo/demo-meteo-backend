import React from 'react';
import LaunchIcon from '@material-ui/icons/Launch';

import './my-url-field.styels.scss'

const MyUrlField = ({ record = {}, source }) =>
    <a href={record[source]} className="link">
        {record[source]}
        <LaunchIcon className='icon' />
    </a>;

export default MyUrlField;
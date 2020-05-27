import React from 'react';
import LaunchIcon from '@material-ui/icons/Launch';

import './custom-url-field.styels.scss'

const CustomUrlField = ({ record = {}, source }) =>
    <a href={record[source]} className="link" target="_blank">
        {record[source]}
        <LaunchIcon className='icon' />
    </a>;

export default CustomUrlField;
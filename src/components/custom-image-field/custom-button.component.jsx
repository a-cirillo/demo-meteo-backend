import React from 'react';
import LaunchIcon from '@material-ui/icons/Launch';

import './custom-button.styels.scss'

const CustomButton = () =>
    <a class="MuiButtonBase-root MuiButton-root MuiButton-text RaButton-button-265 MuiButton-textPrimary MuiButton-textSizeSmall MuiButton-sizeSmall" tabindex="0" role="button" aria-disabled="false" aria-label="Create" href="#/webcams/create"><span class="MuiButton-label"><svg class="MuiSvgIcon-root RaButton-smallIcon-268" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg><span class="RaButton-label-266">Add as webcam</span></span><span class="MuiTouchRipple-root"></span></a>
export default CustomButton;
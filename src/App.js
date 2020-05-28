import React from 'react';
// import { Admin } from 'react-admin';
import { Admin, Resource, Login} from 'react-admin';
import { PostList, PostEdit, PostCreate } from './page/posts/posts.component';
import { WebcamList, WebcamEdit, WebcamCreate } from './page/webcams/webcams.component';
import { WebcamReportsList } from './page/webcam-reports/webcam-reports.component';
import { HousekeepingList, HousekeepingEdit } from './page/housekeeping/housekeeping.component';
import { CommentList } from './page/comment/comment.component';
import { UserList } from './page/users/users.component';
import { Dashboard } from './page/dashboard/dashboard.component';

import authProvider from './provider/auth-provider/auth-provider.component';
import jsonServerProvider from 'ra-data-json-server';

import PostIcon from '@material-ui/icons/Book';
import WebcamIcon from '@material-ui/icons/Airplay';
import HousekeepingIcon from '@material-ui/icons/TvOff';
import WebcamReportsIcon from '@material-ui/icons/Report';
import UserIcon from '@material-ui/icons/Group';
import CommentIcon from '@material-ui/icons/Comment';
import './custom.styels.scss'
import bg from './img/bg.jpg';
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

import dataProvider from './provider/data-provider/data-provider.component';

const MyLoginPage = () => (
    <Login
        // A random image that changes everyday
        backgroundImage={bg}
    />
);


// const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
    <Admin loginPage={MyLoginPage} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource icon={WebcamIcon} name="webcams" list={WebcamList} edit={WebcamEdit} create={WebcamCreate}/>
      <Resource icon={HousekeepingIcon} options={{label: 'Housekeeping'}} name="housekeeping" list={HousekeepingList} edit={HousekeepingEdit}/>
      <Resource icon={WebcamReportsIcon} options={{label: 'Webcam reports'}} name="webcam-reports" list={WebcamReportsList}/>
    </Admin>
);

export default App;
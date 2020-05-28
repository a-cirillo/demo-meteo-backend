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
import WebcamIcon from '@material-ui/icons/LinkedCamera';
import HousekeepingIcon from '@material-ui/icons/BrokenImage';
import WebcamReportsIcon from '@material-ui/icons/RecordVoiceOver';
import UserIcon from '@material-ui/icons/Group';
import CommentIcon from '@material-ui/icons/Comment';
import './custom.styels.scss'
// import bg from '../public/images/bg.jpg';
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

import dataProvider from './provider/data-provider/data-provider.component';

const MyLoginPage = () => (
    <Login
        // A random image that changes everyday
        backgroundImage="/images/bg.jpg"
    />
);


// const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
    <Admin loginPage={MyLoginPage} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource icon={WebcamIcon} name="webcams" list={WebcamList} edit={WebcamEdit} create={WebcamCreate}/>
      <Resource icon={HousekeepingIcon} options={{label: 'Housekeeping'}} name="housekeeping" list={HousekeepingList} edit={HousekeepingEdit}/>
      <Resource icon={WebcamReportsIcon} options={{label: 'Webcam Reports', title: 'Webcam Reports'}} name="reports" list={WebcamReportsList}/>
    </Admin>
);

export default App;
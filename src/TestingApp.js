import React from 'react';
// import { Admin } from 'react-admin';
import { Admin, Resource} from 'react-admin';
import { PostList, PostEdit, PostCreate } from './page/posts/posts.component';
import { CommentList } from './page/comment/comment.component';
import { NewsList } from './page/news/news.component';
import { UserList } from './page/users/users.component';
import { Dashboard } from './page/dashboard/dashboard.component';
import dataProvider from './provider/data-provider/data-provider.component'

import authProvider from './provider/auth-provider/auth-provider.component';
import jsonServerProvider from 'ra-data-json-server';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import CommentIcon from '@material-ui/icons/Comment';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
    <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
      {/*<Resource icon={PostIcon} name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>*/}
      {/*<Resource icon={UserIcon} name="users" list={UserList} />*/}
      {/*<Resource icon={CommentIcon} name="comments" list={CommentList} />*/}
        <Resource icon={CommentIcon} name="categories" list={NewsList} />
    </Admin>
);

export default App;
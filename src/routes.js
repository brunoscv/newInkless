import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Menu from './pages/Menu';
import Scheduling from './pages/Scheduling';
import Historic from './pages/Historic';
import Report from './pages/Report';
import Document from './pages/Document';
import Users from './pages/Users';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Users,
        Menu,
        Scheduling,
        Historic,
        Report,
        Document,
    })
);
export default Routes;
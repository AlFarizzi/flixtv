import { Switch } from 'react-router-dom';
import Index from '../components/admin/Index';
import Add from '../components/admin/main/Add';
import ProtectedRoute from './ProtectedRoute';
import UnProtectedRoute from './UnProtectedRoute';
import Movies from '../components/admin/movies/Movies';
import Edit from '../components/admin/movies/Edit';
import Genres from '../components/admin/movies/Genres';
import Profile from '../components/admin/Setting/Profile';

function Router(props) {

    return (
        <>
            <Switch>
                <UnProtectedRoute />
            </Switch>
            <Switch>
                <ProtectedRoute exact path="/admin" component={Index}  />
                <ProtectedRoute exact path="/add-item" component={Add}  />
                <ProtectedRoute exact path="/catalog" component={Movies}/>
                <ProtectedRoute exact path="/edit/:id/:title" component={Edit} />
                <ProtectedRoute exact path="/genres" component={Genres} />
                <ProtectedRoute exact path="/catalog/:id/:genre" component={Movies} />
                <ProtectedRoute exact path="/profile-setting" component={Profile}/>
            </Switch>
        </>
    
    );
}

export default Router;
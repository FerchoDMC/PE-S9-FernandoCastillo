import { ReactSession } from 'react-client-session';
import { Navigate } from 'react-router-dom';

function SessionGuard({childrenPage}) {
    const isLogin = ReactSession.get("sessionUser")? true : false;
    return isLogin ? childrenPage : <Navigate to="/ingreso" replace />;
}

export default SessionGuard;
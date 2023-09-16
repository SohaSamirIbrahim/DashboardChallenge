import * as React from 'react';
import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom'; // Assuming you're using React Router

type WrappedComponentType = React.ComponentType<any >;

const requireAuth = (WrappedComponent: WrappedComponentType) => {
    const AuthenticatedComponent: any = (props: any) => {
    const isAuthenticated = useSelector((state:any)=> state.auth.isAuthenticated)
    
    if (isAuthenticated) {
        return <WrappedComponent {...props} />;
    } else {
        return <Navigate to="/" />;
    }
  };

  return AuthenticatedComponent;
};

export default requireAuth;

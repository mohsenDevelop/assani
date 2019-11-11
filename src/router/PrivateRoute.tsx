import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";


const PrivateRoute = ({
    component: Component,
    isAuthenticated, loading,
    ...rest
}) => (
        <Route
            {...rest}
            render={
                // tslint:disable-next-line jsx-no-lambda
                props =>
                    !isAuthenticated && !loading ? (
                        <Redirect to="/login" />
                    ) : (
                            <Component {...props} />
                        )
            }
        />
    );
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated

});
export default connect(mapStateToProps)(PrivateRoute);

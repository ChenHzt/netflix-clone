// import React from "react";
// import { connect } from "react-redux";
// import { Redirect, Route } from "react-router";

// const AuthRoute = props => {
//   const { isAuthUser } = props;
//   if (isAuthUser) return <Redirect to="/browse" />;
//   else return <Redirect to="/" />;

//   return <Route {...props} />;
// };

// const mapStateToProps = ({ currentUser }) => ({
//     user:currentUser
// });

// export default connect(mapStateToProps)(AuthRoute);
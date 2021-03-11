import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/home";
import Login from "./pages/login";
import Bye from "./pages/bye";
import Header from "./pages/header";
function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/bye" component={Bye} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default Routes;
//-----------------------------------------------------------------------------------------------------//
//CLass component gql with mulriple queries
// import React, { Component } from "react";
// import { graphql ,compose} from "react-apollo";
// import { check, register } from "./graphql/gql";

// class Routes extends Component {
//   checkquery() {
//     var data = this.props.check;

//     if (data.loading) {
//       return <div>Loading books.....</div>;
//     } else {
//       return <div>{data.hello}</div>;
//     }
//   }
//   render() {
//     return (
//
//            <div>{this.checkquery()}</div>

//     );
//   }
// }
// export default compose({
// graphql(check, {name:"check"}),
// graphql(register, {name:"register"})
// })(Routes);
//-----------------------------------------------------------------------------------------------------//
// CLass component gql connection
// import React, { Component } from "react";
// import { graphql } from "react-apollo";
// import { check } from "./graphql/gql";

// class Routes extends Component {
//   checkquery() {
//     var data = this.props.data;

//     if (data.loading) {
//       return <div>Loading books.....</div>;
//     } else {
//       return <div>{data.hello}</div>;
//     }
//   }
//   render() {
//     return <div>{this.checkquery()}</div>;
//   }
// }
// export default graphql(check)(Routes);
//-----------------------------------------------------------------------------------------------------//
// Function gql connection
// import React from "react";
// import { useQuery } from "@apollo/react-hooks";
// import { users } from "./graphql/gql";
// function Routes() {
//   const { data, loading } = useQuery(users);

//   if (loading) {
//     return <div>loading....</div>;
//   }

//   return <div>{JSON.stringify(data.users)}</div>;
// }

// export default Routes;

import React, { useState } from "react";
import { setAccessToken } from "../accessToke";
import { login } from "../graphql/gql";
import { useMutation } from "@apollo/react-hooks";

function Login({ history }) {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [userlogin] = useMutation(login);
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await userlogin({
            variables: { email: email, password: password },
            // update:(store,{data})=>{
            //   if(!data){
            //     return null;
            //   }
            //   store.writeQuery({
            //     query:MeDocument,
            //     data: data.login.user
            //   })
            // }
          });

          if (res) {
            console.log(res.data.login.accessToken);
            setAccessToken(res.data.login.accessToken);
          }
          history.push("/");
        }}
      >
        <div>
          <input
            type="email"
            required
            value={email}
            placeholder="email"
            onChange={(e) => {
              Setemail(e.target.value);
            }}
          />
          <input
            type="password"
            required
            value={password}
            placeholder="password"
            onChange={(e) => {
              Setpassword(e.target.value);
            }}
          />
          <input type="submit" value="login" />
        </div>
      </form>
    </div>
  );
}

export default Login;

// import React, { Component } from "react";
// import { login } from "../graphql/gql";
// import { flowRight as compose } from "lodash";
// import { graphql } from "react-apollo";
// import { setAccessToken } from "../accessToke";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

//   async submitForm(e) {
//     e.preventDefault();
//     const res = await this.props.login({
//       variables: {
//         email: this.state.email,
//         password: this.state.password,
//       },
//     });

// if (res && res.data) {
//   setAccessToken(res.data.login.accessToken);
// }
//     this.props.history.push("/");
//   }

//   render() {
//     return (
// <form onSubmit={this.submitForm.bind(this)}>
//   <div>
//     <input
//       type="email"
//       required
//       value={this.state.email}
//       placeholder="email"
//       onChange={(e) => {
//         this.setState({ email: e.target.value });
//       }}
//     />
//     <input
//       type="password"
//       required
//       value={this.state.password}
//       placeholder="password"
//       onChange={(e) => {
//         this.setState({ password: e.target.value });
//       }}
//     />
//     <input type="submit" value="login" />
//   </div>
// </form>
//     );
//   }
// }

// export default compose(graphql(login, { name: "login" }))(Login);

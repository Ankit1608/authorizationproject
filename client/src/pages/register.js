import React, { useState } from "react";
import { register } from "../graphql/gql";
import { useMutation } from "@apollo/react-hooks";

function Register({ history }) {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [usercreate, res] = useMutation(register);
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          usercreate({ variables: { email: email, password: password } });
          if (res) history.push("/login");
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
          <input type="submit" value="signup" />
        </div>
      </form>
    </div>
  );
}

export default Register;

// import React, { Component } from "react";
// import { register, check } from "../graphql/gql";
// import { flowRight as compose } from "lodash";
// import { graphql } from "react-apollo";
// class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

//   async submitForm(e) {
//     e.preventDefault();
//     const res = await this.props.register({
//       variables: {
//         email: this.state.email,
//         password: this.state.password,
//       },
//     });
//     if (res) this.props.history.push("/");
//   }
//   render() {
//     return (
//       <form onSubmit={this.submitForm.bind(this)}>
//         <div>
//           <input
//             type="email"
//             required
//             value={this.state.email}
//             placeholder="email"
//             onChange={(e) => {
//               this.setState({ email: e.target.value });
//             }}
//           />
//           <input
//             type="password"
//             required
//             value={this.state.password}
//             placeholder="password"
//             onChange={(e) => {
//               this.setState({ password: e.target.value });
//             }}
//           />
//           <input type="submit" />
//         </div>
//       </form>
//     );
//   }
// }

// export default compose(
//   graphql(register, { name: "register" }),
//   graphql(check, { name: "check" })
// )(Register);

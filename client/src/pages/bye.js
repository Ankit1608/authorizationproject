// import React, { Component } from "react";
// import { graphql } from "react-apollo";
// import { flowRight as compose } from "lodash";
// import { bye } from "../graphql/gql";

// class Bye extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   checkquery() {
//     try {
//       var data = this.props.bye;
//     } catch (err) {
//       console.log(err);
//     }
//     if (data.loading) {
//       return <p>loading....</p>;
//     } else {
//       return <p>{data.bye}</p>;
//     }
//   }
//   render() {
//     return <div>{this.checkquery()}</div>;
//   }
// }
// export default compose(
//   graphql(bye, { name: "bye", options: { fetchPolicy: "network-only" } })
// )(Bye);

import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { bye } from "../graphql/gql";

function Bye() {
  const { data, loading, error } = useQuery(bye, {
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <div>loading....</div>;
  }
  if (data) {
    return <div>{JSON.stringify(data.bye)}</div>;
  }
  if (error) {
    return <div>err</div>;
  }
}
export default Bye;

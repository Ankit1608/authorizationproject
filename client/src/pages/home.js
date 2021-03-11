import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { users } from "../graphql/gql";

function Home() {
  const { data, loading } = useQuery(users);

  if (loading) {
    return <p>loading....</p>;
  }

  if (data) {
    return (
      <div>
        <ul>
          {data.users.map((x) => (
            <li key={x.id}>
              {x.email},{x.id}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Home;

// async fetchUsers() {
//   try {
//     var data = await this.props.users;
//   } catch (err) {
//     console.log(err);
//   }
//   if (data.loading) {
//     this.setState({ userlist: <p>loading...</p> });
//   } else {
//     this.setState({
// userlist: data.users.map((x) => (
//   <li key={x.id}>
//     {x.email},{x.id}
//   </li>
// )),
//     });
//   }
// }

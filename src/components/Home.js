import React from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { listCategories } from "./../graphql/queries";

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.listCategory();
  }

  listCategory = () => {
    console.log("In list category");
    API.graphql(graphqlOperation(listCategories)).then((evt) => {
          evt.data.listCategories.items.map((cat, i) => {
            console.log(cat.name + " " +  cat.description);
          });
        });
  }

  render(){

    // if (this.state.loggedIn)
    //     return <Redirect to='/login'/>;

    this.listCategory();
    return (
      <div className='page-body'>
       <h1 className="text-white">Home page</h1>
       </div>
    );
  }
}
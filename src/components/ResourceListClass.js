import React, { Component } from 'react'
import axios from 'axios';

class ResourceList extends Component {
  state = { resources: [] }

  async componentDidMount() {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/${this.props.resource}`);
    
    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps) {
    console.log(prevProps.resource)
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(`http://jsonplaceholder.typicode.com/${this.props.resource}`);

      this.setState({ resources: response.data });
    }
    
  }

  render() {
    return (
      <div>{this.state.resources.length}</div>
    )
  }
}

export default ResourceList;

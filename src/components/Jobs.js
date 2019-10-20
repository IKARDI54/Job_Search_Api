import React from 'react';

class Jobs extends React.Component {

  render() {
    return (
      <div className="col">
        <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Location</th>
              </tr>
            </thead>
      
          { this.props.jobs.map( item => (
            <tr>
              <td>{item.title}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default Jobs;
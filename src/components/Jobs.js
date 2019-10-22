import React from 'react';
import '../css/Jobs.css';


class Jobs extends React.Component {

  render() {
    return (
      <div className="col">
        <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Location</th>
                <th>TYPE OF WORK DAY</th>
              </tr>
            </thead>
      
          { this.props.jobs.map( item => (
            <tr>
              <td>{item.title}</td>
              <td>{item.location}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default Jobs;
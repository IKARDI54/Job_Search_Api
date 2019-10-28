import React from 'react';
import '../css/Jobs.css';

class Jobs extends React.Component {
  render() {
    return (
      <div className="col">
        <table className="table table-bordered">
            <thead>
              <tr>
                <th >Title</th>
                <th>Location</th>
                <th>TYPE OF WORK DAY</th>
              </tr>
            </thead>
            <tbody>
              { this.props.jobs.map(( item, i) => (
                <tr>
                  <td key={i}>{item.title}</td>
                  <td key={i}>{item.location}</td>
                  <td key={i}>{item.type}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  }
}
export default Jobs;

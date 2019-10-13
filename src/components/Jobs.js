import React from 'react';

class Jobs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      jobs: []
    };
  }

  componentDidMount() {
    fetch('https://jobs.github.com/positions.json', {
        headers: [
          ["Content-Type", "application/json"],
          ["Content-Type", "text/plain"]
        ],
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            jobs: result
          });
        },
        // error handler
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { error, isLoaded, jobs } = this.state;

    if (error) {
      return (
        <div className="col">
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="col">
          Loading...
        </div>
      );
      
    } else {
      return (
        <div className="col">
          <table>
              <tr>
                <th>Title</th>
                <th>Location</th>
              </tr>
            { jobs.map( h => (
              <tr>
                <td>{h.title}</td>
                <td>{h.location}</td>
              </tr>
            ))}
          </table>
        </div>
      );
    }
  }
}

export default Jobs;
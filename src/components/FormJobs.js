import React from 'react';
import '../css/FormJobs.css';
import Jobs from './Jobs'

class FormJobs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      location: '',
      type:'',
      jobs: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value});
  
  }
  
  handleSubmit (e) {
    e.preventDefault()

    fetch(`https://jobs.github.com/positions.json?description=${this.state.description}&location=${this.state.location}`, {
        headers: [
          ["Content-Type", "application/json"],
          ["Content-Type", "text/plain"]
        ],
      })
      .then(res => res.json())
      .then(
        (result) => {
          
          this.setState({
            jobs: result,
          });
          
          console.log(this.state.jobs);
        },
        // error handler
        (error) => {
          this.setState({
            error
          });
        }
      )
}




  render (){
    const { jobs } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div className="container-form field has-addons">
              
                <div className="container-location">
                    <label htmlFor="location">Location: </label>
                    <input
                      onChange={this.handleChange}
                      className="input"
                      type="text"
                      name="location"
                      placeholder="Add location..." />
                </div>
                <div className="container-job">
                    <label htmlFor="description">Job: </label>
                    <input
                      onChange={this.handleChange}
                      className="input"
                      type="text" 
                      name="description"
                      placeholder="Add job..." />
                </div>
                <div className="container-type">
                    <label htmlFor="type">Type: </label>
                    <select 
                    onChange={this.handleChange}
                    className="input">
                      <option value="Partime">Part time</option>
                      <option value="Fulltime">Full time</option>
                    </select>
                </div>


                <div className="container-button">
                    <button className="button is-info">
                        Search
                    </button>
                </div>
            </div>
        </form>
        <Jobs jobs={ jobs }></Jobs>
      </div>
  )
} 
}

export default FormJobs;
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
      jobs: [],
      errors: {
        location: '',
        description: '',
        type: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleChange (event) {
    
    this.setState({ [event.target.name]: event.target.value})
    
  }
  
  validation (values) {
    let error = false
    const msgError = 'This field is required'
    if (!values.description) {
      this.setState({ errors: {
        description: msgError
      }})
      error = true
    }
    
    if (!values.location) {
      this.setState({ errors: {
        location: msgError
      }})
      error = true
    }
    return error
  }

  resetErrors () {
    this.setState({ errors: {
      description: '',
      location: ''
    }})
  }

  handleSubmit (e) {
    const { description, location, type } = this.state
    e.preventDefault()
    this.resetErrors()
    const errors = this.validation({ description, location })
    //const hasErrors = errors.description && errors.location
    if ( !errors ) {
      
      fetch(`https://jobs.github.com/positions.json?description=${description}&full_time=${type}&location=${location}`, {
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
        // error handle
        (error) => {
          this.setState({
            error
          }); 
        }
        )
    }
  }
  render (){
    const { jobs } = this.state
    const { errors } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div className="container-form field has-addons">
              {/*location*/}
                <div className="container-location">
                    <label htmlFor="location">Location: </label>
                    <input
                      onChange={this.handleChange}
                      className="input"
                      type="text"
                      name="location"
                      placeholder="Add location..." />
                      {errors.location && <div className="error">{errors.location}</div>}
                </div>
                {/*description*/}
                <div className="container-job">
                    <label htmlFor="description">Job: </label>
                    <input
                      onChange={this.handleChange}
                      className="input"
                      type="text" 
                      name="description"
                      placeholder="Add job..." />
                      {errors.description && <div className="error">{errors.description}</div>}
                </div>
                {/*full time*/}
                   <div className="container-type">  
                    <label htmlFor="type">Type: </label>
                    <select 
                      name="type"
                      onChange={this.handleChange}
                      className="input">
                      <option name="false" value="false">Part time</option>
                      <option name="true" value="true">Full time</option>
                    </select>
                </div>
                {/*button*/}
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


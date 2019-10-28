import React from 'react';
import '../css/Jobs.css';



/*	</tbody>
  <tbody>
    { this.props.jobs.map(( item, i) => (
      <tr>
        <td key={i}>{item.title}</td>
        <td key={i}>{item.location}</td>
        <td key={i}>{item.type}</td>
      </tr>
    ))}
</tbody>*/

class Jobs extends React.Component {

  state = {
		currentSort: 'default'
	};

	// method called every time the sort button is clicked
	// it will change the currentSort value to the next one
	onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'default';
		else if (currentSort === 'default') nextSort = 'down';

		this.setState({
			currentSort: nextSort
		});
	};


  render() {
  
    const { jobs } = this.props;
    const { currentSort } = this.state;
    const sortTypes = {
      
      up: {
         class: 'sort-up',
        fn: (a, b) => Math.floor(Math.random() * 101) - Math.floor(Math.random() * 101)
      },
      down: {
        class: 'sort-down',
        fn: (a, b) => Math.floor(Math.random() * 101) - Math.floor(Math.random() * 101)
      },
      default: {
        class: 'sort',
        fn: (a, b) => a
      }
      
    };

    return (      
      jobs.length > 0 && (
      <div className="col">
        <table className="table table-bordered">
            <thead>
              <tr>
                <th >Title</th>
                <th>Location</th>
                <th>created_at
                <button type="button" class="btn btn-outline-success btn-sm" onClick={this.onSortChange}>
									{sortTypes[currentSort].class}
								</button>
                </th>
                <th>TYPE OF WORK DAY</th>
              </tr>
            </thead>
            <tbody>
            {[...jobs].sort(sortTypes[currentSort].fn).map(item => (
							<tr>
								 <td >{item.title}</td>
                  <td>{item.location}</td>
                  <td>{item.created_at}</td>
                  <td>{item.type}</td>
							</tr>
            ))}
            </tbody>
        </table>
      </div>
    )
    )
  }
}
export default Jobs;

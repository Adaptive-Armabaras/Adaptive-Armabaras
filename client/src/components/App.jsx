// Module Imports
import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

// File Imports
import Weekly from './Weekly.jsx';
import AddTask from './AddTask.jsx';
import Notes from './Notes.jsx';
import AppHeader from './AppHeader.jsx';
import Chart from './Chart.jsx'
import Ddiv from '../hoc/ddiv/ddiv.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: null,
      currentWeekData: [],
      weekState: [
        {date: 'Monday', count: 0},
        {date: 'Tuesday', count: 0},
        {date: 'Wednesday', count: 0},
        {date: 'Thursday', count: 0},
        {date: 'Friday', count: 0},
        {date: 'Saturday', count: 0},
        {date: 'Sunday', count: 0}
      ],
      addTaskActive: false
    }
  }

  componentDidMount() {
    this.setState({userId: localStorage.getItem('userId')})
  }

  // setUserIdToState = (userId) => {
  //   this.setState({userId: userId});
  // }

  clearUserIdFromState = () => {
    this.setState({userId: null});
  }

  toggleAddTaskForm = () => this.setState({addTaskActive: !this.state.addTaskActive});

  updateCurrentWeekData = (data) => {
    this.setState({currentWeekData: data})
  }

  render(props) {

    return (
      <div className="container-fluid"> 
        <div className="row">

        {/* Sidebar Component */}
          <div className="col-md-2 pl-0 pr-0">
            <AppHeader
            logged={!(!this.state.userId)}
            setUserIdToState={this.setUserIdToState}
            clearUserIdFromState={this.clearUserIdFromState} />
            
          </div>

          {/* Chart Component */}
          <div className='col-md-4'>
            <div>
              <Chart data={this.state.currentWeekData} />
            </div>
          </div>  

          
          <div className="col-md-6">
            {/* Tasks Component */}
            <Weekly
              week={this.state.weekState}
              className='weekly-view'

              userId={this.state.userId}
              logged={!(!this.state.userId)}
              showAddTaskForm={this.toggleAddTaskForm}
              setWeekDataState={this.updateCurrentWeekData}            
            />
            {
              <Drawer width={400} openSecondary={true} open={this.state.addTaskActive} >
                <AppBar iconStyleLeft={{ display: 'none' }} title="Add Task" />
                <AddTask userId={this.state.userId} closeAddTaskForm={this.toggleAddTaskForm} />
              </Drawer>
            }

            {/* Note Component */}
            <div className='col-md-4'>
              <div className="row">
                <div>
                  <Notes userId={this.state.userId} />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      )
  }
}

export default App;


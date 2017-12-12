import React, { Component } from 'react'
import {
  VisibilityFilters
} from '../../../store/action-types/index'
import './index.css'
import {
  Button,
  Icon
} from 'antd'
const ButtonGroup = Button.Group;
class Footer extends Component {
  constructor(){
    super()
    this.state = {
      all: 'primary',
      active: 'default',
      completed: 'default'
    }
  }
  handleFiter = (status) => {
    this.props.handleFiter(status)
    if (status === VisibilityFilters.SHOW_ALL){
      this.setState({
        all: 'primary',
        active: 'default',
        completed: 'default'
      })
    } else if (status === VisibilityFilters.SHOW_ACTIVE){
      this.setState({
        all: 'default',
        active: 'primary',
        completed: 'default'
      })
    } else if (status === VisibilityFilters.SHOW_COMPLETED){
      this.setState({
        all: 'default',
        active: 'default',
        completed: 'primary'
      })
    }
  }
  render() {
    return (
      <div className='footer'>
        <Button className='filter' type="primary" shape="circle">
          <Icon type="filter" />
        </Button>
        {' '}
        <ButtonGroup>
          <Button 
            type={this.state.all}
            size='large'
            onClick={() => this.handleFiter(VisibilityFilters.SHOW_ALL)}>
            All
          </Button>
          <Button 
            type={this.state.active}
            size='large'
            onClick={() => this.handleFiter(VisibilityFilters.SHOW_ACTIVE)}>
            Active
          </Button>
          <Button 
            type={this.state.completed}
            size='large'
            onClick={() => this.handleFiter(VisibilityFilters.SHOW_COMPLETED)}>
            Completed
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default Footer
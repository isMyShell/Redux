import React, { Component } from 'react'
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
      type : {
        all:'primary',
        active : 'default',
        completed : 'default'
      }
    }
  }
  handleAll = (e) => {
    e.stopPropagation()
    this.setState({
      type: {
        all: 'primary',
        active: 'default',
        completed: 'default'
      }
    })
    this.props.onShowAll()
  }
  handleActive = (e) => {
    e.stopPropagation()
    this.setState({
      type: {
        all: 'default',
        active: 'primary',
        completed: 'default'
      }
    })
    this.props.onShowActive()
  }
  handleClick = (e) => {
    e.stopPropagation()
    this.setState({
      type: {
        all: 'default',
        active: 'default',
        completed: 'primary'
      }
    })
    this.props.onCompleted()
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
            type={this.state.type.all}
            size='large'
            onClick={e => this.handleAll(e)}>
            All
          </Button>
          <Button 
            type={this.state.type.active}
            size='large'
            onClick={e => this.handleActive(e)}>
            Active
          </Button>
          <Button 
            type={this.state.type.completed}
            size='large'
            onClick={e => this.handleClick(e)}>
            Completed
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default Footer
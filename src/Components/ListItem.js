import React from 'react'
import {destroyItem, updateStatus} from '../api/todo'


export default React.createClass({
	handleClick(e){
		e.preventDefault()
    destroyItem(this.props.id)
	},
  handleChange(e) {
    console.log(e.target.checked)
    if(e.target.checked) {
      updateStatus(this.props.id, 'complete')
    } else {
      updateStatus(this.props.id, 'active')
    }
  },
  render() {
    return (
    	<li>
    		<input onChange={this.handleChange} type="checkbox" id={this.props.id}/>
    		<label htmlFor={this.props.id}>{this.props.title}</label>
    		<button onClick={this.handleClick}>X</button>
    	</li>
    )
  }
})
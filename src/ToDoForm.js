import React from 'react'
 
 const styles = {
 	inputs: {
 		width:400,
 		textAlign:'center',
 		height:50,
 		// display:block,
 		// lineHeight:50
 		fontSize:18
 	}
 }

export default React.createClass({
	getInitialState(){
		return{
		task:''
		}
	},
	handleSubmit(e){
    e.preventDefault()
    this.props.updateList(this.state.task)
    this.setState({
    	task: ''
    })
  },
  handleChange(e){
  	this.setState({
  		task:e.target.value
  	})
  },
  render() {
    return (
    	<form onSubmit={this.handleSubmit}>
          <input style={styles.inputs} type="text" placeholder="What needs to be done?" value={this.state.task} onChange={this.handleChange} />
      </form>
    )
  }
})
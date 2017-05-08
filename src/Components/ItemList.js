import React from 'react'
import ListItem from './ListItem'
import store from '../store'

export default React.createClass({
	getInitialState() {
    return {
      items:[]
    }
  },

  componentWillMount() {
    store.subscribe(()=>{
      const appState = store.getState()
      this.setState({
        items: appState.items
      })
    })

  },
  render() {
    return (
    	<ul>
          {this.state.items.map(item=>(
          <ListItem key={item.id} {...item} />	
      	))}
    	</ul>
    )
  }
})




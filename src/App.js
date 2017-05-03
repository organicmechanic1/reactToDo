import React from 'react'
import ToDoForm from './ToDoForm'
import ItemList from './ItemList'
import {generate as id} from 'shortid'


const styles = {
  form: {
    width:400,
    background:"#eee",
    margin:'auto',
    marginTop:100
  },
  heading: {
    textAlign:'center',
    lineHeight:1,
    fontFamily:'Verdana',
    fontWeight: 'lighter',
    fontSize: 80,
    color: 'gray',
  }
}

export default React.createClass({
  getInitialState(){
    return {
      items:[]
    }
  },
  updateList(task){
    this.setState({
      items: [...this.state.items, {
        title: task,
        id: "id" + id()
      }]
    })
  },
  destroyItem(id){
    this.setState({
      items: this.state.items.filter(item=>{
      return item.id !== id
      })
    })
  },
  render() {
    return (
      <div style={styles.form}>
        <h1 style={styles.heading}> todos </h1>
          <ToDoForm updateList={this.updateList} />
          <ItemList destroyItem={this.destroyItem} items={this.state.items} />
        
      </div>
    )
  },
})



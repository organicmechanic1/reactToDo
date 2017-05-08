import React from 'react'
import ToDoForm from './ToDoForm'
import ItemList from './ItemList'



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
  
  render() {
    return (
      <div style={styles.form}>
        <h1 style={styles.heading}> todos </h1>
          <ToDoForm />
          <ItemList />
        
      </div>
    )
  },
})



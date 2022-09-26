import React, { Component } from 'react'
import axios from 'axios'
export default class CreateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
           images:'',
           name:'mobile101',
           description:'nice product',
           price:'9000',
           stock:10,
           category:'Mobile'
        }
    }
      changeHandler(e){
        let file=e.target.files[0]
        this.setState({
            images:file,
            
        })
   
    }

      onCreateUser=(event)=>{ 
          event.preventDefault()
          let fd=new FormData()
          fd.append("images",this.state.images)
          fd.append("name",this.state.name)
          fd.append('description',this.state.description)
          fd.append('price',this.state.price)
          fd.append('stock',this.state.stock)
          fd.append('category',this.state.category)
          axios({
            url:'/admin/product/new',  method:'POST', data:fd
          }).then(res=>{console.log(res)
          }).catch(err=>console.log(err))
        }
        
    render() {
      return <div><h1>Add Product</h1>
          <form method="post">
                  <div className='form-group col-6'>
                  <label>Profile</label>
                  <input type="file" name="Image" className='form-control' 
                  onChange={(e)=>this.changeHandler(e)}/>
              </div>
              <button className='btn btn-primary mt-2' onClick={this.onCreateUser}>Add Product</button>
          </form>
         </div>;
  
  }
}


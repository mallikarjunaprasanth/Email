import React from "react";
import './App.css';
class Primary extends React.Component{

    state={
        file :[]
    }

    componentDidMount(){
        this.getDataUsers()
    }
    getDataUsers = async()=>{
        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        const data= await response.json();
        this.setState({file:data})
        console.log(data)
    }
    render(){
        return(

<div>
{this.state.file.map((user)=> (
    <div className="tnt">
    {this.state.file.map((user) => (
      <div className="row">
      
      <div className="ps-3 overflow-hidden p-1 lin border-bottom border-top "><span><code><input className="fa-2x str" type="checkbox" /> <i className="text-muted str p-1 far fa-star"></i></code> </span>
         <span><code className="text-muted ps-3"> {user.body}</code> </span>
       </div>
      </div>
    ))}
  </div>
))}
</div>

           )
    }
}
export default Primary;
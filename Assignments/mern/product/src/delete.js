import { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
class Delete extends Component {
    state = { deleteid:{pid:""} } 
    deletepro=()=>{

        var helper=new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.status===200 && helper.readyState===4){
                var data=helper.responseText;
                console.log(data);
            }
        }
        helper.open("DELETE","http://127.0.0.2:5000/product/"+this.state.deleteid.pid);
        helper.setRequestHeader("content-Type","application/json");
        helper.send();
    }
    ontextchange=(args)=>{
        var id={...this.state.deleteid}
        id["pid"]=args.target.value;
        this.setState({deleteid:id})
    }
    render() { 
        return (<>
        <div className="d-flex justify-content-center">
        <input type="text" value={this.state.deleteid.pid} onChange={this.ontextchange} placeholder="PID"/>
        <button onClick={this.deletepro} className="btn btn-danger">Delete</button>
        </div>
        </>);
    }
}
 
export default Delete;
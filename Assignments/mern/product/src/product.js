import { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./stylw.css"
class product extends Component {
    state = { product:[{pid:0,ptitle:"",price:0,stock:0}],
    prod:{ptitle:"",price:"",stock:""},
    pid:0}
    componentDidMount(){
        this.getdata();
    }
    componentDidUpdate(){
        this.getdata();
    }
    getdata=()=>{
        var helper=new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.status===200 && helper.readyState===4){
                var data=JSON.parse(helper.responseText);
                this.setState({product:data});
            }
        }
        helper.open("GET","http://127.0.0.2:5000/product/")
        helper.send();
    }
    addrec=()=>{
     
        var helper=new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.status===200 && helper.readyState===4){
                
                
            }
        }
        helper.open("POST","http://127.0.0.2:5000/product");
        helper.setRequestHeader("Content-Type","application/json");
        helper.send(JSON.stringify(this.state.prod));
    }
    ontextchange=(args)=>{
        var pro={...this.state.prod};
        pro[args.target.name]=args.target.value;
        this.setState({prod:pro});
    }
    update=()=>{
        var helper=new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.status===200 && helper.readyState===4){
                
                
            }
        }
        helper.open("PUT","http://127.0.0.2:5000/product/"+this.state.pid);
        helper.setRequestHeader("Content-Type","application/json");
        helper.send(JSON.stringify(this.state.prod));
    }
    edit=(no)=>{
        var helper=new XMLHttpRequest();
        helper.onreadystatechange=()=>{
          if(helper.readyState===4 && helper.status===200){
            var data=JSON.parse(helper.responseText);
            var pro={...this.state.prod};
            pro["ptitle"]=data[0].ptitle;
            pro["price"]=data[0].price;
            pro["stock"]=data[0].stock;
            this.state.pid=data[0].pid;
            this.setState({prod:pro});
          }
        }
        helper.open("GET","http://127.0.0.2:5000/product/"+no);
        helper.setRequestHeader("Content-Type","application/json");
        helper.send();
    }
    render() { 
            return (<>
            
            <div className="container" style={{marginTop:"5%"}}>
            <div>            <img src="logo2.png" alt="logo" className="logo"/>
                <h1 className="companyname">Singh Industries</h1></div>
            <input type="text" name="ptitle" value={this.state.prod.ptitle} onChange={this.ontextchange} placeholder="Product Name"/>
        <input type="number" name="price" value={this.state.prod.price} onChange={this.ontextchange} placeholder="Price"/>
        <input type="number" name="stock" value={this.state.prod.stock} onChange={this.ontextchange} placeholder="Stock"/>
        <br/>
        <button onClick={this.addrec} className="btn btn-primary">Add</button>{" "}
        <button onClick={this.update} className="btn btn-success">Update</button>
        
        <table border="1" className="table table-responsive">
            <thead><tr>
            <th>Pid</th>
                <th>Ptitle</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Edit</th>
            </tr>
                
            </thead>
            <tbody>
                {this.state.product.map(ele=>{ 
                    return (<tr key={ele.pid}>
                        <td>{ele.pid}</td>
                        <td>{ele.ptitle}</td>
                        <td>{ele.price}</td>
                        <td>{ele.stock}</td>
                        <td>
                        <button onClick={()=>{this.edit(ele.pid)}} className="btn btn-warning">Edit</button>
                        </td>
                    </tr>)
                    
                })}
            </tbody>
        </table>
        <p id="inputfield"></p>
        </div></>);
    }
}
 
export default product;
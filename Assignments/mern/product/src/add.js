import { Component } from "react";
import product from "./product";
class Addrec extends Component {
    state = { product:{ptitle:"",price:0,stock:0} } 
    ontextchange=(args)=>{
        var prod={...this.state.product};
        prod[args.target.name]=args.target.value;
        this.setState(prod);
    }
    
    componentDidUpdate(){
        
    }
    render() { 
        return (<>
       
        <input type="text" name="ptitle" value={this.state.product.ptitle} onChange={this.ontextchange}/>
        <input type="number" name="price" value={this.state.product.price} onChange={this.ontextchange}/>
        <input type="number" name="stock" value={this.state.product.stock} onChange={this.ontextchange}/>
        <br/>
        <input type="button" value="Add"/>
        </>);
    }
}
 
export default Addrec;
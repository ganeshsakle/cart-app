import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[
                {
            price:999,
            title:"Mobile Phone",
            qty:0,
            img:'',
            id:1
            },
                {
                price:99,
                title:"watch",
                qty:0,
                img:'',
                id:2
                },

                {
                price:40000,
                title:"Laptop",
                qty:0,
                img:'',
                 id:3
             }
            ]
            }
    }

    handleIncreaseQty = (product) => {
        const {products} =this.state;
        const index =products.indexOf(product);
        products[index].qty +=1;
        this.setState({
            products:products
        })
    }


        handleDecreaseQty=(product) =>{
            const {products} = this.state;
            const index = products.indexOf(product);
            if(products[index].qty === 0) {return} 

            products[index].qty -=1;

            this.setState({
                products:products
            })
        }

        handleDeleteQty=(id)=>{
            const {products} = this.state;
            const items =products.filter((item)=> item.id!==id);
            this.setState({
                products:items
            })
        }
    
    render(){
        const {products} = this.state;
        return(
            <div class="cart"> 

                {/* <CartItem title={"phone"} price={999} qty={0} img={''}/> */}
                {products.map((product) => {
                return <CartItem product= {product} 
                key={product.id} 
                onIncreaseQty={this.handleIncreaseQty}
                onDecreaseQty={this.handleDecreaseQty}
                onDeleteQty={this.handleDeleteQty}
                />
                 })}
    
            </div>
        );
    }
}

export default Cart;
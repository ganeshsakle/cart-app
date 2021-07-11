import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price:999,
            title:"Mobile Phone",
            qty:9,
            img:""
        }
    }
    render () {
        return(
             <div className="cart-item">
                   <div className="left-block">
                    <img style = {styles.image}   />
                    </div>

                    <div className="right-block">
                        <div style={{fontSize:25}}> {this.state.title} </div>
                        <div style={{color:"#777"}}> Rs.{this.state.price} </div>
                        <div style={{color:"#777"}}> Qty. {this.state.qty} </div>

                        <div className="cart-item-actions">
                            {/* Buttons */}
                            <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/png/128/992/992651.png"/>
                            <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/512/1828/1828906.png"/>
                            <img alt="Delete" className="action-icons" src="https://img-premium.flaticon.com/png/128/484/premium/484611.png?token=exp=1625937975~hmac=a75bd47b1ef0ac24bd30edf4f9acc29e"/>
                        </div>
                     </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4
    }
}

export default CartItem;
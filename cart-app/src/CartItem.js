import React from 'react';

class CartItem extends React.Component{
    // // constructor(){
    // //     super();
    // //     this.state = {
    // //         price:999,
    // //         title:"Mobile Phone",
    // //         qty:0,
    // //         img:''
    // //     }
    // // }
    //        increaseQty = () => {
    //         //    console.log("hey", this.state.qty);
    //         //    this.state.qty++;

    //         this.setState((prevState) => {
    //             return {
    //                 qty:prevState.qty + 1
    //             }
    //         });
    //        }


    //        // Decrease button functionalities
    //        decreaseQty = () =>{
    //            if(this.state.qty>0){    // OR - const {qty} = this.state; if(qty === 0) {return ;}
    //           this.setState((prevState) => {
    //               return {
    //                   qty:prevState.qty - 1
    //               }
    //           }) 
    //         }
    //        }

    render () {
        const {price, title, qty} =this.props.product;
        return(
             <div className="cart-item">
                   <div className="left-block">
                    <img style = {styles.image}  />
                    </div>

                    <div className="right-block">
                        <div style={{fontSize:25}}> {title} </div>
                        <div style={{color:"#777"}}> Rs.{price} </div>
                        <div style={{color:"#777"}}> Qty. {qty} </div>

                        <div className="cart-item-actions">
                            {/* Buttons */}
                            <img alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/128/992/992651.png"
                            onClick={()=>this.props.onIncreaseQty(this.props.product)}
                            />
                            

                            <img alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/1828/1828906.png"
                            onClick={()=>this.props.onDecreaseQty(this.props.product)}
                            />

                            <img alt="Delete" 
                            className="action-icons" 
                            src="https://img-premium.flaticon.com/png/128/484/premium/484611.png?token=exp=1625937975~hmac=a75bd47b1ef0ac24bd30edf4f9acc29e"
                            onClick= {()=>this.props.onDeleteQty(this.props.product.id)}
                            />
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
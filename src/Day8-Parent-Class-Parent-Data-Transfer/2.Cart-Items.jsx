
const CartItems =(props) =>{
    console.log(props);
    let totalPrice = 0;
    for(let i=0; i< props.passData.length;i++)
    {
        totalPrice += props.passData[i].price
    }
    return(
        <div>
            <p>The total price of {props.passData.length} items is {totalPrice}</p>
        </div>
    );
};
export default CartItems
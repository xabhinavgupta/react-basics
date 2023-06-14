const ChildColorComponent =(props)=>{
    return(
        <div style={{ color: props.color }}>Changing the color on button click</div>
    )
}
export default ChildColorComponent;

ChildColorComponent.defaultProps = {color:'black'}
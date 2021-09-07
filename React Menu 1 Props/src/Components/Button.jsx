function Button(props){
    return(
        <div>
            <button style={{
                backgroundColor: props.color,
                color:"white"
            }}
            >{props.purpose}</button>
        </div>
    );
}

export default Button;
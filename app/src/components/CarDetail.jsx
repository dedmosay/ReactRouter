const CarDetail = (props) => {
    console.log(props)
    return (
        <div>
            {props.match.params.name} 
             {/* <div>{props.history.location.name}</div> 
             <div>{props.location.color}</div> 
            <div>{props.location.year}</div>  */}
        </div>
    );
}

export default CarDetail;
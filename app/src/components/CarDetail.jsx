const CarDetail = (props) => {
    console.log(props)
    return ( <div>
        <div>{props.location.props.name}</div>
        <div>{props.location.props.year}</div>
    </div> );
}
 
export default CarDetail;
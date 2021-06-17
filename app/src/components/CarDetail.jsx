const CarDetail = (props) => {
    console.log(props)
    return (
        <div>
            {props.match.params.name}
            {/* Не работает после перезагрузке THE BUG */}
            <div>{props.location.props.name}</div>
            <div>{props.location.props.year}</div>
        </div>
    );
}

export default CarDetail;
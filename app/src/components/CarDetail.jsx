const CarDetail = ({match, location}) => {
    console.log(location.state)
    const { name, year, color } = location.state
    return (
        <div>
            <p>{name}</p>
            <p>{year}</p>
            <p>{color}</p>
        </div>
    );
}

export default CarDetail;
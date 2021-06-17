import { withRouter } from 'react-router-dom';

const Car = (props) => {
    return (<div className="Car"
        onClick={
            () => props.history.push({
                pathname: "/cars/" + props.name.toLowerCase(),
                props
            })
        }
    >
        <p>{props.name}</p>
        <p>{props.year}</p>
    </div>);
}

export default withRouter(Car);
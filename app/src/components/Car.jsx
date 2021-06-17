import { withRouter } from 'react-router-dom';

const Car = ({history, name, year, color}) => {
    return (<div className="Car"
        onClick={
            () => history.push({
                pathname: "/cars/" + name.toLowerCase(),
            }, {name, year, color})
        }
    >
        <p>{name}</p>
        <p>{year}</p>
    </div>);
}

export default withRouter(Car);
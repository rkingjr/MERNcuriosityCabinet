import classes from './BlankCard.module.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const BlankCard = () => {
    return (
        <Container style={{ backgroundImage: `url(${Bookcase})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Card>
                {/* Add conditional to direct 1) new user to signin page, 2) registered user to login page, 3) already logged in to fileupload page */}
                < Link to={`/login`}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Add Something New!</Card.Title>
                    </Card.Body>
                </Link>
            </Card>
            )
        </Container>
    )
}

export default BlankCard
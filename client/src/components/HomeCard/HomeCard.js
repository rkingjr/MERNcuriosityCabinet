import classes from './HomeCard.module.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const HomeCard = ({
  collections
}) => {
  return (
    <Container style={{ backgroundImage: `url(${Bookcase})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      {collections &&
        collections.map((collection) => (
          <Card key={collection._id}>
            < Link to={`/cabinet/${collection._id}`}>
              <Card.Img variant="top" src={collection.image.filepath} />
              <Card.Body>
                <Card.Title>{collection.title}</Card.Title>
                <Card.Text>
                  {collection.description}
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>

        ))}
    </Container>
              {collections &&
        collections.map((collection) => (
            <Card>
            <Card.Img variant="top" src={collection.image.filename} />
            <Card.Body>
              <Card.Title>{collection.title}</Card.Title>
              <Card.Text>
                {collection.description}
              </Card.Text>
            </Card.Body>
            </Card>
                    ))}
          </Container>
  )
}

export default HomeCard
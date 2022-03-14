import classes from './Cubby.module.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import Bookcase from '../../public/images/bookcase-single.jpeg'

const Cubby = ({
  images
}) => {
  return (
    <Container style={{ backgroundImage: `url(${Bookcase})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      {images &&
        images.map((image) => (

// Might be easier having three separate card components - homecard, cabinetcard, artifactcard - import them & write simple conditionals depending on user activity

          <Card>
            {/* There could be a conditional so the cubby contains different image / text depending on which page is being displayed - Home, Cabinet or Artifact */}
            <Card.Img variant="top" src={image.filename} />
            {/* or image.cabinet.filename */}
            <Card.Body>
              <Card.Title>{image.title}</Card.Title>
              {/* or image.cabinet.title */}
              <Card.Text>
                {image.description}
                 {/* or image.cabinet.description */}
              </Card.Text>
              {/* There should be a conditional written here so this list only appears when user is on Artifact page */}
              <ListGroup className="list-group-flush">
                <ListGroupItem>By: {image.user.name}</ListGroupItem>
                <ListGroupItem>    {image.user.title}</ListGroupItem>
                <ListGroupItem>    {image.user.affiliation}</ListGroupItem>
              </ListGroup>
              {/* There should be a conditional written here for buttons to appear depending on Auth and user activity */}
              <Button variant="primary">Edit</Button>
              <Button variant="primary">Save</Button>
            </Card.Body>
          </Card>
        ))}
    </Container>
  )
}

export default Cubby

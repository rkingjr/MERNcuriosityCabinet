import classes from './CabinetCard.module.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_COLLECTIONS } from '../utils/queries';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Bookcase from '../../public/images/bookcase-single.jpeg';
import { useParams } from 'react-router';
import Auth from '../utils/auth';


const CabinetCard = () => {
    // This pulls single collection via params and query hooks...code is probably not quite right yet!
    const { collectionID } = useParams();

    const { loading, data } = useQuery(
        {
            variables: { collectionID: collectionID }
        }
    );

    const collection = data?.collections || {};

    if (loading) {
        return <div>Loading...</div>;
    }
}
// Need to add additional condition that userID matches the one attached to the collection
if (Auth.loggedIn()) {
    return (
        <Container style={{ backgroundImage: `url(${Bookcase})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            {collections &&
                collections.map((collection) => (
                    <Card key={collection._id} >
                        < Link to={`/artifact/${collection.image._id}`}>
                            <Card.Img variant="top" src={collection.image.filepath} />
                            <Card.Body>
                                <Card.Title>{collection.image.title}</Card.Title>
                                <Card.Text>
                                    {collection.image.description}
                                </Card.Text>
                                {/* Add code here to direct user to page for editing artifact */}
                                <Button variant="primary">Edit</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                ))}
        </Container>
    )
}


return (
    <Container style={{ backgroundImage: `url(${Bookcase})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        {collections &&
            collections.map((collection) => (
                <Card key={collection._id} >
                    < Link to={`/artifact/${collection.image._id}`}>
                        <Card.Img variant="top" src={collection.image.filepath} />
                        <Card.Body>
                            <Card.Title>{collection.image.title}</Card.Title>
                            <Card.Text>
                                {collection.image.description}
                            </Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
            ))}
    </Container>
)
}

export default CabinetCard
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function flower_product(props) {
    const { flower } = props;
    return (
        <Card>
            <Link to={`/flower/${flower.flower_id}`}>
                <img src={flower.imgeFlower} className="card-img-top" alt={flower.FlowerName} />
            </Link>
            <Card.Body>
                <Link to={`/flower/${flower.flower_id}`}>
                    <Card.Title>{flower.FlowerName}</Card.Title>
                </Link>
                <Card.Text>${flower.Price}</Card.Text>
                    <Button>Add to cart</Button>
            </Card.Body>
        </Card>
    );
}

export default flower_product;
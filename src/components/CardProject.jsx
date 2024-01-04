import React from 'react'
import { Card } from 'react-bootstrap'

export const CardProject = ({imgUrl,title, text, link}) => {
    return (
        <>
            <Card style={{ width: '18rem', height:'25rem' }}>
                <Card.Img variant="top" src={imgUrl} style={{height: '10rem'}} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {link &&(
                            <a href={link} style={{ textDecoration: 'none', color: 'GrayText' }}>
                                {text}
                            </a>
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

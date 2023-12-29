import React from 'react'
import { Card } from 'react-bootstrap'

export const CardProject = ({imgUrl,title, text, link}) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgUrl} />
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

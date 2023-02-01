import React from 'react'
import PropTypes from 'prop-types';
import {Container,Row,Col,Form ,Button} from 'react-bootstrap';

export const LoginForm = ({handleonchange,handleOnSubmit,formSwitcher,email,pass}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className="text-info text-center" >Client Login</h1>
                <hr/>
                <br/>
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>
                            Eamil Address
                        </Form.Label>
                        <Form.Control  type="email" name="email" placeholder="Enter Email" required
                            onChange={handleonchange}
                            
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control  type="password" name="password" placeholder="Password" required
                            handleonchange={handleonchange}
                        />
                    </Form.Group>
                    <br/>
                    <Button type="submit" >Login</Button>
                    <hr/>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="!#" onClick={()=>formSwitcher('rest')}>Forget Password</a>
            </Col>
        </Row>
    </Container>
  )
}
LoginForm.propTypes={
    handleonchange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
}

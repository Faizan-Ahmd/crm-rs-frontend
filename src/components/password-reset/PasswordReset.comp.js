import React from 'react'
import PropTypes from 'prop-types';
import {Container,Row,Col,Form ,Button} from 'react-bootstrap';

export const PasswordReset = ({handleonchange,handleOnSubmit,email,formSwitcher,handleOnReset}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className="text-info text-center" >Reset Password</h1>
                <hr/>
                <br/>
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>
                            Eamil Address
                        </Form.Label>
                        <Form.Control  type="email" name="email" placeholder="Enter Email" required
                            onChange={handleonchange}
                            handleOnREset={handleOnReset}
                            
                        />
                    </Form.Group>
                    
                    <br/>
                    <Button type="submit" >Reset Password</Button>
                    <hr/>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="!#" onClick={()=>formSwitcher('login')}>Login Now</a>
            </Col>
        </Row>
    </Container>
  )
}
PasswordReset.propTypes={
    handleonchange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    handleOnReset:PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}

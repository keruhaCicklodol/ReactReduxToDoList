import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Col,
  Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { submitPostAsync } from '../../redux/actions/postsActions';

export default function MyForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const changeHandler = useCallback((e) => setInput(e.target.value), []);
  const submitHandler = (e) => dispatch(submitPostAsync(e, input, setInput));
  return (
    <Row>
      <Col>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Label for="exampleEmail">
              Пост
            </Label>
            <Input
              id="exampleEmail"
              name="message"
              value={input}
              onChange={changeHandler}
              placeholder="чево делаешб"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" color="success">Отправить</Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
}

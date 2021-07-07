import React, { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'

const StockMarketForm = () => {
  const [formFields, setFormFields] = useState({})
  const onFormChanged = (eventTarget) => {
    setFormFields({ ...formFields, [eventTarget.id]: eventTarget.value })
  }
  return (
    <div className="stockMarketForm">
      <Col xs="3">
        <Card>
          <CardHeader>Stock Form</CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label size="sm" for="symbol">Symbol</Label>
                    <Col>
                      <Input
                        id="symbol"
                        size="sm"
                        type="text"
                        onChange={(e) => onFormChanged(e.target)}
                      />
                    </Col>
                </FormGroup>
                <FormGroup row>
                  <Label size="sm" for="startDate">Start Date</Label>
                    <Col>
                      <Input
                        id="startDate"
                        size="sm"
                        type="date"
                        onChange={(e) => onFormChanged(e.target)}
                      />
                    </Col>
                </FormGroup>
                <FormGroup row>
                  <Label size="sm" for="endDate">End Date</Label>
                  <Col>
                    <Input
                      id="endDate"
                      type="date"
                      size="sm"
                      onChange={(e) => onFormChanged(e.target)}
                    />
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              <Button size="sm">Submit</Button>
            </CardFooter>
        </Card>
      </Col>
    </div>
  )
}
export default StockMarketForm

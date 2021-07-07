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
import { useDispatch, useSelector } from 'react-redux'
import submitStockForm from '../redux/stockMarketSlice'

const StockMarketForm = () => {
  const defaultSymbol = useSelector((state) => state.stockMarket.formData.symbol)
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState({})
  const onFormChanged = (eventTarget) => {
    setFormFields({ ...formFields, [eventTarget.id]: eventTarget.value })
  }
  const onFormSubmitClicked = (e) => {
    e.preventDefault()
    dispatch(submitStockForm(formFields))
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
                        defaultValue={defaultSymbol}
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
              <Button
                size="sm"
                onClick={(e) => onFormSubmitClicked(e)}
              >Submit</Button>
            </CardFooter>
        </Card>
      </Col>
    </div>
  )
}
export default StockMarketForm

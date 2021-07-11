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
import { submittedStockForm } from '../redux/stockMarketSlice'

const StockMarketForm = () => {
  const dispatch = useDispatch()
  const stockMarketFormData = useSelector((state) => state.stockMarket.formData)
  const [currentStockMarketForm, setCurrentStockMarketForm] = useState({})
  const onFormFieldChanged = (e) => {
    e.preventDefault()
    setCurrentStockMarketForm({
      ...stockMarketFormData,
      [e.target.id]: e.target.value
    })
  }
  const onFormSubmitClicked = (e) => {
    // Caches the current form fields and requests the stocks API
    e.preventDefault()
    dispatch(submittedStockForm(currentStockMarketForm))
  }
  return (
    <div className="stockMarketForm">
      <Col>
        <Card>
          <CardHeader>Stock Form</CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label size="sm" for="symbol">Symbol</Label>
                    <Col>
                      <Input
                        id="symbol"
                        defaultValue={stockMarketFormData.symbol}
                        size="sm"
                        type="text"
                        onChange={(e) => onFormFieldChanged(e)}
                      />
                    </Col>
                </FormGroup>
                <FormGroup row>
                  <Label size="sm" for="from">Start Date</Label>
                    <Col>
                      <Input
                        id="from"
                        defaultValue={stockMarketFormData.from}
                        size="sm"
                        type="date"
                        onChange={(e) => onFormFieldChanged(e)}
                      />
                    </Col>
                </FormGroup>
                <FormGroup row>
                  <Label size="sm" for="to">End Date</Label>
                  <Col>
                    <Input
                      id="to"
                      defaultValue={stockMarketFormData.to}
                      type="date"
                      size="sm"
                      onChange={(e) => onFormFieldChanged(e)}
                    />
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              <Button
                size="sm"
                onClick={(e) => onFormSubmitClicked(e)}
              >Submit
              </Button>
            </CardFooter>
        </Card>
      </Col>
    </div>
  )
}
export default StockMarketForm

import React from 'react'
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
import { submitStockForm, stockFormChanged } from '../redux/stockMarketSlice'

const StockMarketForm = () => {
  const stockMarketFormData = useSelector((state) => state.stockMarket.formData)
  const dispatch = useDispatch()
  const onFormChanged = (eventTarget) => {
    console.log(eventTarget.id)
    if (eventTarget.id === 'from' || eventTarget.id === 'to') {
      eventTarget.value = Math.floor(new Date(eventTarget.value).valueOf() / 1000)
    }
    dispatch(stockFormChanged(eventTarget))
  }
  const onFormSubmitClicked = (e) => {
    e.preventDefault()
    dispatch(submitStockForm(stockMarketFormData))
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
                        onChange={(e) => onFormChanged(e.target)}
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
                        onChange={(e) => onFormChanged(e.target)}
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

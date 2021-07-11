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
import { submittedStockForm, stockFormChanged } from '../redux/stockMarketSlice'

const StockMarketForm = () => {
  const stockMarketFormData = useSelector((state) => state.stockMarket.formData)
  const dispatch = useDispatch()
  const onFormChanged = (eventTarget) => {
    if (eventTarget.id === 'start' || eventTarget.id === 'end') {
      eventTarget.value = new Date(eventTarget.value).valueOf()
    }
    // TODO: caching form data without rerequesting the api with RTK Query subscription
    dispatch(stockFormChanged(eventTarget))
  }
  const onFormSubmitClicked = (e) => {
    e.preventDefault()
    dispatch(submittedStockForm(stockMarketFormData))
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

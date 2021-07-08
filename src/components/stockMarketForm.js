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
  const formData = useSelector((state) => state.stockMarket.formData)
  const dispatch = useDispatch()
  const onFormChanged = (eventTarget) => {
    dispatch(stockFormChanged(eventTarget))
  }
  const onFormSubmitClicked = (e) => {
    e.preventDefault()
    dispatch(submitStockForm(formData))
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
                        defaultValue={formData.symbol}
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
                        defaultValue={formData.startDate}
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
                      defaultValue={formData.endDate}
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

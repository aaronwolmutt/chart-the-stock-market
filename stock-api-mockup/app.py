from datetime import datetime
from flask import Flask, request, make_response
import json
import yfinance as yf

app = Flask(__name__)


@app.route("/")
def index():
    return """
        <h1>Open chart the stock market services</h1>
            <br>
            <p> Used for UI mock up. Serves daily stock market data from
                yahoo finance
            </p>
    """


@app.route("/health")
def health():
    try:
        return {"status": "UP"}
    except Exception as e:
        return {"status": "DOWN"}


@app.route("/api/v1/stock", methods=["GET"])
def get_stock_prices():
    try:
        symbol = request.args.get("symbol")
        begin = request.args.get("from")
        end = request.args.get("to")
        if symbol is None:
            return {"message": f"Missing required parameter symbol"}, 400
        stock_df = yf.Ticker(symbol).history(period="5y").drop(
            labels=['Open', 'High', 'Low',
                    'Dividends', 'Stock Splits'],
            axis=1).rename(columns={"Close": "close",
                                    "Volume": "volume"})
        stock_df['date'] = stock_df.index
        if begin is not None:
            stock_df = stock_df.loc[begin:end]
        payload = json.loads(stock_df.to_json(date_format="iso",
                                              orient="records"))
        # convert date to YYYY-mm-dd string format
        for entry in payload:
            entry.update((k, v.split("T")[0]) for k, v in entry.items()
                         if k == "date")
        response = make_response(json.dumps(payload))
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response
    except Exception as e:
        return {"message": f"Response malformed - {e}"}, 500


if __name__ == "__main__":
    app.run(port=8080)

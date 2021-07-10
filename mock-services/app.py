from flask import Flask
from flask import request, jsonify
import json
import yfinance as yf

app = Flask(__name__)


@app.route("/")
def index():
    return """
        <h1>Open chart the stock market services</h1>
            <br>
            <p> Used for UI mock up. Serves daily stock market data from yahoo finance </p>
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
        if symbol is None:
            return {"message": f"Missing required parameter symbol"}, 400
        stock_df = yf.Ticker(symbol).history(period="5y")
        stock_df = stock_df.drop(labels=['Open', 'High', 'Low',
                                         'Dividends', 'Stock Splits'],
                                 axis=1)
        stock_df = stock_df.rename(columns={"Close": "close",
                                            "Volume": "volume"})
        serialized_payload = json.loads(stock_df.to_json(date_format="iso",
                                                         orient="index"))
        return jsonify(serialized_payload), 200
    except Exception as e:
        return {"message": f"Response malformed - {e}"}, 500


if __name__ == "__main__":
    app.run()

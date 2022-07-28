import http.client

conn = http.client.HTTPSConnection("alpha-vantage.p.rapidapi.com")

headers = {
    'X-RapidAPI-Key': "SIGN-UP-FOR-KEY",
    'X-RapidAPI-Host': "alpha-vantage.p.rapidapi.com"
    }

conn.request("GET", "/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
let song;
let playSong;

// Spotify Client Creds
const clientId = '94e5fc60a83a4e7889fe541a27ebb48e';
const clientSecret = '01d0ddd8948f4a92a6508f90f930fb80';

const _getToken = async () => {
    const result = await fetch(`https://yfapi.net/v8/finance/chart/AAPL?comparisons=MSFT%2C%5EVIX&range=1mo&region=US&interval=1d&lang=en&events=div%2Csplit
	`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'      
    })

    // Access the data given to us by the fetch response (Promise)
    const data = await result.json()
    return data.access_token
}
/// respones 
{
	"chart": {
	  "result": [
		{
		  "meta": {
			"currency": "USD",
			"symbol": "AAPL",
			"exchangeName": "NMS",
			"instrumentType": "EQUITY",
			"firstTradeDate": 345479400,
			"regularMarketTime": 1656356512,
			"gmtoffset": -14400,
			"timezone": "EDT",
			"exchangeTimezoneName": "America/New_York",
			"regularMarketPrice": 141.53,
			"chartPreviousClose": 149.64,
			"priceHint": 2,
			"currentTradingPeriod": {
			  "pre": {
				"timezone": "EDT",
				"start": 1656316800,
				"end": 1656336600,
				"gmtoffset": -14400
			  },
			  "regular": {
				"timezone": "EDT",
				"start": 1656336600,
				"end": 1656360000,
				"gmtoffset": -14400
			  },
			  "post": {
				"timezone": "EDT",
				"start": 1656360000,
				"end": 1656374400,
				"gmtoffset": -14400
			  }
			},
			"dataGranularity": "1d",
			"range": "1mo",
			"validRanges": [
			  "10y",
			  "1d",
			  "5y",
			  "3mo",
			  "max",
			  "5d",
			  "1mo",
			  "6mo",
			  "1y",
			  "ytd",
			  "2y"
			]
		  },
		  "timestamp": [
			1653658200,
			1654003800,
			1654090200,
			1654176600,
			1654263000,
			1654522200,
			1654608600,
			1654695000,
			1654781400,
			1654867800,
			1655127000,
			1655213400,
			1655299800,
			1655386200,
			1655472600,
			1655818200,
			1655904600,
			1655991000,
			1656077400,
			1656356512
		  ],
		  "comparisons": [
			{
			  "symbol": "MSFT",
			  "high": [
				273.34,
				274.77,
				277.69,
				274.65,
				273.45,
				274.18,
				273.13,
				273,
				272.71,
				260.58,
				249.02,
				245.74,
				255.3,
				247.42,
				250.5,
				254.75,
				257.17,
				259.37,
				267.98,
				268.3
			  ],
			  "low": [
				267.56,
				268.93,
				270.04,
				261.6,
				268.41,
				267.22,
				265.94,
				269.61,
				264.63,
				252.53,
				241.53,
				241.51,
				246.42,
				243.02,
				244.03,
				249.51,
				250.37,
				253.63,
				261.72,
				264.3
			  ],
			  "chartPreviousClose": 273.24,
			  "close": [
				273.24,
				271.87,
				272.42,
				274.58,
				270.02,
				268.75,
				272.5,
				270.41,
				264.79,
				252.99,
				242.26,
				244.49,
				251.76,
				244.97,
				247.65,
				253.74,
				253.13,
				258.86,
				267.7,
				264.6
			  ],
			  "open": [
				268.48,
				272.53,
				275.2,
				264.45,
				270.31,
				272.06,
				266.64,
				271.71,
				267.78,
				260.58,
				245.11,
				243.86,
				248.31,
				245.98,
				244.7,
				250.26,
				251.89,
				255.57,
				261.81,
				268.205
			  ]
			},
			{
			  "symbol": "^VIX",
			  "high": [
				27.54,
				28.35,
				27.73,
				26.5,
				25.96,
				25.81,
				26.24,
				24.78,
				26.24,
				29.63,
				35.05,
				34,
				32.77,
				34.82,
				33.31,
				30.65,
				31.57,
				29.77,
				29.72,
				28.66
			  ],
			  "low": [
				25.57,
				25.94,
				25.38,
				24.33,
				24.76,
				24.82,
				23.88,
				23.74,
				23.82,
				26.05,
				31.29,
				32.06,
				27.76,
				30.35,
				30.47,
				29.33,
				28.78,
				28.74,
				26.83,
				27.13
			  ],
			  "chartPreviousClose": 25.72,
			  "close": [
				25.72,
				26.19,
				25.69,
				24.72,
				24.79,
				25.07,
				24.02,
				23.96,
				26.09,
				27.75,
				34.02,
				32.69,
				29.62,
				32.95,
				31.13,
				30.19,
				28.95,
				29.05,
				27.23,
				27.21
			  ],
			  "open": [
				27.5,
				27.47,
				26.05,
				25.73,
				24.91,
				25.37,
				25.54,
				24.37,
				24.29,
				26.26,
				31.37,
				33.01,
				32.39,
				30.35,
				32.84,
				30.63,
				31.45,
				29.29,
				29.07,
				28.3
			  ]
			}
		  ],
		  "indicators": {
			"quote": [
			  {
				"open": [
				  145.38999938964844,
				  149.07000732421875,
				  149.89999389648438,
				  147.8300018310547,
				  146.89999389648438,
				  147.02999877929688,
				  144.35000610351562,
				  148.5800018310547,
				  147.0800018310547,
				  140.27999877929688,
				  132.8699951171875,
				  133.1300048828125,
				  134.2899932861328,
				  132.0800018310547,
				  130.07000732421875,
				  133.4199981689453,
				  134.7899932861328,
				  136.82000732421875,
				  139.89999389648438,
				  142.69500732421875
				],
				"volume": [
				  90978500,
				  103718400,
				  74286600,
				  72348100,
				  88471400,
				  71598400,
				  67808200,
				  53950200,
				  69473000,
				  91437900,
				  122207100,
				  84784300,
				  91533000,
				  108123900,
				  134118500,
				  81000500,
				  73409200,
				  72433800,
				  89047400,
				  46210860
				],
				"high": [
				  149.67999267578125,
				  150.66000366210938,
				  151.74000549316406,
				  151.27000427246094,
				  147.97000122070312,
				  148.57000732421875,
				  149,
				  149.8699951171875,
				  147.9499969482422,
				  140.75999450683594,
				  135.1999969482422,
				  133.88999938964844,
				  137.33999633789062,
				  132.38999938964844,
				  133.0800018310547,
				  137.05999755859375,
				  137.75999450683594,
				  138.58999633789062,
				  141.91000366210938,
				  143.49000549316406
				],
				"low": [
				  145.25999450683594,
				  146.83999633789062,
				  147.67999267578125,
				  146.86000061035156,
				  144.4600067138672,
				  144.89999389648438,
				  144.10000610351562,
				  147.4600067138672,
				  142.52999877929688,
				  137.05999755859375,
				  131.44000244140625,
				  131.47999572753906,
				  132.16000366210938,
				  129.0399932861328,
				  129.80999755859375,
				  133.32000732421875,
				  133.91000366210938,
				  135.6300048828125,
				  139.77000427246094,
				  141.2899932861328
				],
				"close": [
				  149.63999938964844,
				  148.83999633789062,
				  148.7100067138672,
				  151.2100067138672,
				  145.3800048828125,
				  146.13999938964844,
				  148.7100067138672,
				  147.9600067138672,
				  142.63999938964844,
				  137.1300048828125,
				  131.8800048828125,
				  132.75999450683594,
				  135.42999267578125,
				  130.05999755859375,
				  131.55999755859375,
				  135.8699951171875,
				  135.35000610351562,
				  138.27000427246094,
				  141.66000366210938,
				  141.5301055908203
				]
			  }
			],
			"adjclose": [
			  {
				"adjclose": [
				  149.63999938964844,
				  148.83999633789062,
				  148.7100067138672,
				  151.2100067138672,
				  145.3800048828125,
				  146.13999938964844,
				  148.7100067138672,
				  147.9600067138672,
				  142.63999938964844,
				  137.1300048828125,
				  131.8800048828125,
				  132.75999450683594,
				  135.42999267578125,
				  130.05999755859375,
				  131.55999755859375,
				  135.8699951171875,
				  135.35000610351562,
				  138.27000427246094,
				  141.66000366210938,
				  141.5301055908203
				]
			  }
			]
		  }
		}
	  ],
	  "error": null
	}
  }


// Function to get Song info when image figure is clicked
/**
 * @param img_index
 * @param item_index
 * 
 * Function gets a song from spotify using the image index of our gallery. Then it finds
 * the correct item_index indside of the JSON response data from Spotify which will
 * produce a preview URL that will be used to play our selected song.
 * 
 */

async function clickedEvent(img_index, item_index) {
    // Get track name
    let track = document.getElementsByTagName('img')[img_index].attributes[1].value

    // Get our token
    let token = await _getToken();

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['Authorization', `Bearer ${token}`]
    ])

    let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`, {
        method: 'GET',
        headers: headers
    })

    let result = await fetch(request);

    let response = await result.json();

    console.log(response)
    let song = response.tracks.items[item_index].preview_url

    // Before we play a song, first check if playSong is True, and if so, stop it
    if (playSong){
        stopSnippet();
    }
    songSnippet(song);
}

/**
 * @param id
 * @param event
 * 
 * id = image id for gallery image
 * event = Mouse event given by the action from our user
 * 
 * Our function will produce songs from the clickedEvent based on the index of the image
 * 
 * 
 */

function getSong(id, event) {
    switch(id){
        case 'div1': { // Anywhere the wind Blows
            event.stopPropagation();
            clickedEvent(0, 0)
            break;
        }
        case 'div2': { // Stay
            event.stopPropagation();
            clickedEvent(1, 0)
            break;  
        }
        case 'div3': { // Lie Again
            event.stopPropagation();
            clickedEvent(2, 0)
            break;
        }
        case 'div4': { // Warm Embrace
            event.stopPropagation();
            clickedEvent(3, 0)
            break;
        }
        case 'div5': { // I like dat
            event.stopPropagation();
            clickedEvent(4, 0)
            break;
        }
        case 'div6': { // Smokin out the window
            event.stopPropagation();
            clickedEvent(5, 0)
            break;
        }
    }
}

/**
 * 
 *@param url
 *
 * url is the song preview url
 * 
 * function will return audio clip given by the url
 * 
 */

 function songSnippet(url){
     playSong = new Audio(url)
     return playSong.play();
 }

 /**
  * 
  * NO Params
  * 
  * Function returns an event to stop the song snippet
  * 
  */

 function stopSnippet(){
     return playSong.pause();
 }
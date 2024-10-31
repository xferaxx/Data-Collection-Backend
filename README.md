# Data Collection Backend

## Description
This backend API collects and stores Zero-Trust Score data.

### Technologies
- Node.js
- Express

## Setup Instructions

1. ** Clone the repository **:

   A) git clone https://github.com/xferaxx/Data-Collection-Backend.git
   
   B) cd Data-Collection-Backend (or where did you clone it)


3. ** Install dependencies and Run the project **:
   
   C) npm install


4. ** Run the server **:
   
   D) node index.js


NOW you will see the server is running on http://localhost:3000


1) you need to open the browser and go to http://localhost:3000/api/zero-trust
   (it will show nothing at the moment only a black page with no data)


2) now we need to open postman and then click on:
   
   ( new >> choose (HTTP) from the list >> then you can put a URL use this URL (http://localhost:3000/api/zero-trust) ).

   and next to the URL YOU WILL SEE A LIST TO CHOOSE FROM (GET,POST,.....) YOU NEED TO CHOOSE POST FOR NOW,

   now under the URL there is Body click on it and choose raw and then json from the list and then enter this lines:

   {
     "averageShannonEntropyScore": 7.8,
     "firewallDetected": true,
     "DNSsecEnabled": true,
     "tlsVersion": "1.2",
     "certificateBitStrength": 2048,
     "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
     "openPortsDetected": 12
   }


3) now you can click SEND after you click send you need to change from POST to GET and then just click send again

   you should see the data, now go to the browser where is the black page and click refresh you should now see the data

   in ( http://localhost:3000/api/zero-trust )






   

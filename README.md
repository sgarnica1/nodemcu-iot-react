# TH Servers

Frontend web application for `TH Servers`, a webapp to measure and control temperature and humidity in a data center

## Installation

To install this project, first clone the repository

``` bash
# HTTP
git clone https://github.com/sgarnica1/nodemcu-iot-react.git
```
or
``` bash
# SSH
git clone git@github.com:sgarnica1/nodemcu-iot-react.git

```
#### For installation, move to the directory
``` bash
cd nodemcu-iot-react
```
and run the following command
``` bash
npm install
```

After installing, now run the app in the development mode
``` bash
npm start
```
And open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## About the application
TH-Servers is a web application for tracing, reading and alerting temperatures and humidities in any data center.

This application is part of a fullstack application build with a backend server with Node.js, Express and MongoDB Atlas; and an IoT (Internet of Things) project, which is build with a NodeMCU and a DHT22 Sensor. 

### Backend
- Built with Node.js, Express.js and MongoDb Atlas
- Access the GitHub Repository [here](https://github.com/sgarnica1/nodemcu-iot)
- Deployed under the `/api` endpoint in Heroku [(https://thservers.herokuapp.com/)](https://thservers.herokuapp.com) and Render [(https://thservers.onrender.com)](https://thservers.onrender.com/)


### Hardware
#### General settings:
- NodeMCU Version: `Robotistan, NodeMCU 1.0 V2, ESP8266MOD`
- Arduino Version: `1.8.19`
- NodeMCU Driver: `1.0`
- ESP32 Driver: `ESP8266 2.7.4 `

#### Components
- Buzzer
- DHT22 Module Sensor 
- NodeMCU Robotistan, NodeMCU 1.0 V2, ESP8266MOD
- LCD 16x2 I2C

## More Commands

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

This app was created with Create React App [(documentation)](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

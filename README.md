# F1 Champions

In this project we will use http://ergast.com/mrd/ to create a single page application that presents a list that shows the F1 world champions starting from 2005 until now.

### Wireframes

<img src="./wireframes/wireframe.main.jpg?raw=true" width="400" height="400">

### Design

#### Desktop
<img src="./wireframes/design-desktop.png?raw=true" width="400" height="200">

#### Mobile
<img src="./wireframes/design-mobile.png?raw=true" width="200" height="400">

### Commands

### `npm start`

To start the application

### `npm run test`

To test the available unit test

***
#### Test API Instance for getDriverStandingByYear - src/api/ApiInstance.test.ts
***
#### Test Header Component- src/components/common/Heeder/__tests__/Header.test.js
***
#### Test Select Box Component - src/components/common/SelectBox/__tests__/SelectBox.test.js

### `npm run cy:run | npm run cy:open (Test with Cypress Dashboard)`

To test the available unit test

### `npm run lint`

Show all possible lint errors

### `npm run prettier`

Fix all prettier problems in your code

### `npm run scss`

Update all changed styles and create a styles.css

# Decisions | Tech Stack

## Fetch only 5 years at a given time

Instead of fetching the entire set of data from 2005-2021 made a decision to divide it between 3 year ranges. Although fetching all data is relatively small I would not do that in prod as a good practice. Instead think of pagination.

## Axios Instance

I believe using Axios instance are a cleaner way to manage all endpoints and to create a single source for each endpoint. I would use this behavior in production code instead of directly accessing axios.get(). But to show how I would do so, Ive include an example in SessionModal

#### Redux-Toolkit
For state management I think the toolkit provides easy to implement, easy to maintain methods out of the box. Project required to handle data fetched from the given API. With toolkit it’s easy to handle pending/fulfilled statues and also easily do error handling.


#### Cypress
A quick attempt to write some integration tests. Cypress initial setup is fairly straightforward.

#### React Testing Library
A quick attempt to write some unit tests as well. Given more time I would write more test the redux implementation
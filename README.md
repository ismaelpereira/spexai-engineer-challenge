# data-engineer-code-challenge
Code challenge for Senior Software Engineer with a focus on data

As a Senior Software Engineer, you will join our Mobility Intelligence team. You would work in a cross-functional team of skilled Engineers with backgrounds in Cartography, Transportation Science, Computer Science, and Geo-informatics to develop our cutting-edge Insights tool. Based on the analysis of extensive supply- and demand-data sources, we plan for our clients how to realize the vision of a car-free city. We analyze, visualize and simulate millions of data points using best-in-class technology like RxJava, GeoPandas, Mapbox GL.

Multiple times per week we receive data from various providers (e.g. cell phone data, car navigation data, app usage data) containing origin-destination trips. All the data gives us insights into the mobility patterns of people, which we use to find out how we best can improve mobility with our Rideshare service. The [linked CSV](trips.csv) file is a small sample of such a dataset. For further analysis (e.g. visualizations in a web app or simulations done by another microservice), the following requirements need to be met.

## ⚙️ Requirements
* Automated processes to ingest and store the data on an on-demand basis
  * Trips that are similar in terms of origin, destination and hour of the day should be grouped together. Please describe the approach you used to aggregate similar trips.
* A service that is able to provide the following functionality:
  * Return the weekly average of the number of trips for an area defined by  bounding box and region
  * Inform about the status of the data ingestion without using a polling solution
* The solution should be scalable to 100 million entries. It is encouraged to simplify the data by a data model. Please add proof that the solution is scalable. 
* The solution should be written in TypeScript using an SQL database
* Bonus points if you containerize your solution and if you sketch how you would set up the application on AWS

## 📦 Tech Stack

- Node.js
- Nest.js
- PostgreSQL
- Docker & Docker Compose
- Turborepo
- Prisma

🐳 Running Locally

1. Using Docker Compose 

Create a .env file using the .env.example and put your own values

```bash
npm run docker:up
```

This will start:

- Postgres
- Run Prisma migrations
- file-processor
- file-api

2. Running Locally

You need to setup a Postgres on your local machine, the run the prisma migrate commands using the `.env` environment variables following the `.env.example`.

```bash
npm i
npm run build
npm run dev
```

This will start `file-processor` on port **3001** and `file-api` on port **3000**

## 🤖 Testing

Before all the tests make sure you have runned

```bash
npm i
npm run build
```

1. Running unit tests

```bash
npm run test
```

2. Running e2e tests

```bash
npm run test:e2e
```

## 🚀 API Endpoints

### File Processor

#### Upload a trips file

```bash
curl --location 'localhost:3001/trips' --form 'file=@"<PATH TO YOUR FILE>"
```
### File API

#### GET Weekly Average

```bash
curl --location 'localhost:3000/trips/weekly-average?region=Turin&minLat=0&maxLat=99&minLon=0&maxLon=99'
```

#### Stream file change **WITHOUT POOLING**

```bash
curl --location 'localhost:3000/files/stream'
```

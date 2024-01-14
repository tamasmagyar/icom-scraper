

# Setup

## Prerequisites locally

1. Chrome

## Config

create ``.env`` file with 

```
URL='your-flat-search-url-param'
```

# Running

## Running locally without docker

Run ts
```
yarn ts:watch
```


Run server to serve scraped data
```
yarn start:server
```


Run scraper script
```
yarn start
```



### Scheduling job locally

1. setup cron job to start `yarn start` command (scraper)
2. setup systemd to run `yarn server:server` (express server to serve json data to Grafana)


## Running with Docker

```
docker compose up
```
- Starts server to serve json data on port 3069
- Runs scraping script every 24 hours
- Stores scraped data locally under data/ folder


# Displaying data
1. Install and start Grafana
2. [Install Infinity Data source from store](https://grafana.com/grafana/plugins/yesoreyeram-infinity-datasource/)
3. Start express server to serve `data/results.json` (either with start:server OR docker)


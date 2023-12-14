

# Setup

## Prerequisites

1. Chrome

## Config

create ``.env`` file with 

```
URL='your-flat-search-url-param'
```

## Running

Run ts
```
yarn ts:watch
```

Run scraper script
```
yarn start
```

# Displaying data
1. Install and start Grafana
2. [Install Infinity Data source from store](https://grafana.com/grafana/plugins/yesoreyeram-infinity-datasource/)
3. Start express server to serve `data/results.json`
- `yarn start:server`
- Served response will be available on `localhost:3069`


# Scheduling job

1. setup cron job to start `yarn start` command (scraper)
2. setup systemd to run `yarn server` (express server to serve json data to Grafana)


# TODO & roadmap

1. Dockerize services
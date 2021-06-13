# ibuki

![Ibuki](./frontend/src/assets/ibuki_logo.svg)

Ibuki is a scraping platform.

# Development

## Init
```
$ docker-compose build
$ docker-compose run --rm frontend sh -c "npm install"
$ docker-compose run --rm backend  sh -c "npm install"
```

## Run
```
$ docker-compose up

# Frontend: http://localhost:3000
# Backend:  http://localhost:3001
```

## Add new package
```
$ docker-compose run --rm {backend,frontend} sh -c "npm install <package>"
```

## Without Docker
### Frontend
```
$ npm install -g @vue/cli@next
$ cd frontend
$ npm install
$ vue upgrade --next
$ npm run dev

# access http://localhost:3000
```

### Backend
```
$ npm install -g @nestjs/cli
$ cd backend
$ npm install
$ npm run start
# access http://localhost:3001
```

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

```bash
$ yarn install -g mau
$ mau deploy
```

## Роуты

### Аутентификация
- **POST** `/auth/login`
  - Описание: Аутентификация пользователя.
  - Пример запроса:
    ```sh
    curl -X 'POST' \
      'http://localhost:3000/auth/login' \
      -H 'Content-Type: application/json' \
      -d '{
      "email": "john.doe@example.com",
      "password": "password123"
    }'
    ```

### Регистрация
- **POST** `/auth/register`
  - Описание: Регистрация нового пользователя.
  - Пример запроса:
    ```sh
    curl -X 'POST' \
      'http://localhost:3000/auth/register' \
      -H 'Content-Type: application/json' \
      -d '{
      "username": "john_doe",
      "email": "john.doe@example.com",
      "password": "password123",
      "confirmPassword": "password123",
      "roles": ["student"],
      "createdAt": "2024-11-08T00:00:00.000Z"
    }'
    ```

### Профиль пользователя
- **GET** `/auth/profile`
  - Описание: Возвращает текущего аутентифицированного пользователя.
  - Пример запроса:
    ```sh
    curl -X 'GET' \
      'http://localhost:3000/auth/profile' \
      -H 'Authorization: Bearer <your_jwt_token>'
    ```

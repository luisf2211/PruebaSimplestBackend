Backend RESTful API diseñado con TypeScript, Express, y arquitectura basada en DDD (Domain-Driven Design).
Conexión a base de datos MySQL + manejo de autenticación con JWT. Proyecto modular, escalable y mantenible.

# ARCHITECTURE: DDD Design
# DI is created by investify

|-- /src
|   |-- /application
|   |   |-- /use-cases
|   |       |-- ExampleUseCase.ts
|   |-- /domain
|   |   |-- /entities
|   |       |-- ExampleEntity.ts
|   |   |-- /repositories
|   |       |-- ExampleRepository.ts
|   |-- /infrastructure
|   |   |-- /database
|   |       |-- MySQLClient.ts
|   |   |-- /http
|   |       |-- /controllers
|   |           |-- ExampleController.ts
|   |       |-- /middleware
|   |           |-- exampleMiddleware.ts
|   |       |-- /routes
|   |           |-- exampleRoutes.ts
|-- index.ts
|-- tsconfig.json
|-- package.json



👨‍💻 Autor
Desarrollado con pasión por Luis Felipe Reyes Báez
Github: https://github.com/luisf2211/PruebaSimplestBackend
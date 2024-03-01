1. Install Deps

```
npm i
```

2. Create local db

```
npx sequelize db:create
```

3. Migrate db

```
npx sequelize db:migrate
```

4. Seed db

```
npx sequelize db:seed:all
```

5. Run local server

```
node bin/www --watch
```

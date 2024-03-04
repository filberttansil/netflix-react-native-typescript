
### Setup Server![Uploading Simulator Screenshot - iPhone 15 Pro Max - 2024-03-04 at 16.22.08.png…]()

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

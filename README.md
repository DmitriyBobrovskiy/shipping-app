# Shipping app

A simple shipping app to add parcels and list them.

This app consists of two apps - backend written on NodeJs + NestJs and frontend written on Angular. 

## How to run

### Using docker compose

This app has docker compose support, so to run it, just execute
```bash
cd <project_root>
docker compose up --build
```

### Locally

Open `./backend/src/app.module.ts` and change host from `database` to `localhost`.

And then:
```bash
docker compose up database
```

```bash
cd <project_root>/backend
npm run start:dev
```

```bash
cd <project_root>/frontend
ng serve
```

## Considerations

Before going to production they should be fixed.

* Logging is missed in both apps
* Error handling is very poor
* Only happy path works. If any of the fields are empty on parcel creation the user won't see why (console logs are visible only)
* Validation is done in absolutely wrong way
* Submit on Enter doesn't work
* Overall there are some things that I'd improve in frontend
* Unit tests are missing
* Configuration values and secrets are stored just in code - they should be moved to environment variables and read from there.

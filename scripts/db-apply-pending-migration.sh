#!/bin/bash

echo "Running all Prisma pending migrations..."
docker-compose exec app npx prisma migrate dev
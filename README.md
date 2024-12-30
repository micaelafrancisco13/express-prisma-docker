# Express Prisma Docker

## Running the App Locally

To start this app locally, follow these steps:

1. **Install Dependencies**

   Before starting the containers, install the required dependencies by running:
   ```shell
   npm install
    ```
   
2. **Start the Containers**

   Run the following command in the root of the project to build and start the containers:
    ```shell
   docker-compose up --build --no-cache -d
    ```
   
3. **Verify the Containers**

   Ensure that both the **app** and **db** containers are successfully running:
   - Use `docker-ps` to check the status of the containers.

4. **Updating Database Schema (On Changes to `prisma/schema.prisma`)**

   If you make local changes to `prisma/schema.prisma`, you must generate and apply a new migration afterward:    
   Run the following command in the root project terminal:
    ```shell
   scripts/db-apply-new-migration.sh <name-of-migration>
    ```
   Replace `<name-of-migration>` with a descriptive name for your migration.


## Notes
- Ensure you have [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) installed on your system before running these commands.
- The _scripts_ directory contains helper scripts for managing migrations and dependencies.
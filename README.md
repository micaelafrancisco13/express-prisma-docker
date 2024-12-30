# Express Prisma Docker

## Running the App Locally

To start this app locally, follow these steps:

1. **Start the Containers**

    Run the following command in the root of the project to build and start the containers:
    ```bash
    docker-compose up --build --no-cache -d
    ```
2. **Verify the Containers**

   Ensure that both the **app** and **db** containers are successfully running:
   - Use `docker-ps` to check the status of the containers.

3. **Initial Database Migration (First-Time Setup)**

    If this is your first time running the app locally, you need to apply the initial database migration(s):

    Run the following command in the root project terminal:
    ```bash
    scripts/db-apply-pending-migration.sh
    ```
   This applies all pending migrations (e.g., add-new-table) to your local database.
   If the migration includes new tables or schema changes, they will now be reflected in your local database.
   **_Note_** that this command must be run occasionally if there are new migrations in the `prisma/migrations` directory.

4. **Updating Database Schema (On Changes to `prisma/schema.prisma`)**

    If you make changes to `prisma/schema.prisma` in the future, you must generate and apply a new migration:
    
    Run the following command in the root project terminal:
    ```bash
    scripts/db-apply-new-migration.sh <name-of-migration>
    ```
    Replace `<name-of-migration>` with a descriptive name for your migration.


## Managing Dependencies

### Installing npm Packages
To install new npm packages and sync them with the container:
```bash
scripts/sync-deps-install.sh <name-of-npm-package>
```
Replace `<name-of-npm-package>` with the name of the package you want to install.

### Uninstalling npm Packages
To uninstall npm packages and sync the changes with the container:
```bash
scripts/sync-deps-uninstall.sh <name-of-npm-package>
```
Replace `<name-of-npm-package>` with the name of the package you want to uninstall.


## Notes
- Ensure you have [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) installed on your system before running these commands. 
- The _scripts_ directory contains helper scripts for managing migrations and dependencies.
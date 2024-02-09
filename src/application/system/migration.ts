import { devLog } from '@/application/helper/log';
import { $useBuild16 } from '@/data/migration/build16';
import { readSystemStorage, writeSystemStorage } from '@/data/storage/systemStorage';

const latestDatabaseBuild = 16; // doesn't have to be kept up to date, we won't always need a migration

export async function startDatabaseMigration() {
    const databaseBuild = await readSystemStorage();

    if (!databaseBuild?.db?.version) {
        return writeSystemStorage({
            db: {
                version: latestDatabaseBuild,
            },
        });
    }

    if (databaseBuild.db.version === latestDatabaseBuild) {
        return;
    }

    for (let i = databaseBuild.db.version; i <= latestDatabaseBuild; i++) {
        if (i === databaseBuild.db.version) {
            continue; // we're already on this version, no need to run the migration
        }

        try {
            await migrateDatabaseToBuild(i);
        } catch (exception) {
            devLog(exception);
        }
    }
}

// Reason for the boolean return here is that we want to update version in DB when done, but only if we actually ran a migration.
// Meaning I'm hoping to catch use cases where we update the latest build number but forgot to add a call to the migration here.
// Not really a major problem, we can just increase the number again, but still doesn't feel correct if the loop in executeMigrations() just updates the number without any checking
// I couldn't come up with a more elegant solution that doesn't involve using eval, so I guess we'll just do an IF for each migration.
async function migrateDatabaseToBuild(build: number): Promise<void> {
    let migrated = false;

    // if (build === 15) {
    //     await $useBuild15.up();
    //     migrated = true;
    // }

    if (build === 16) {
        await $useBuild16.up();
        migrated = true;
    }

    if (migrated) {
        await writeSystemStorage({
            db: {
                version: build,
            },
        });
    }
}

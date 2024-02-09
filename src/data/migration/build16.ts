import { devLog } from '@/application/helper/log';
import { createMigrationHandler } from '@/data/migration/migrationInterface';

export const $useBuild16 = createMigrationHandler({
    async up() {
        devLog('upgrading db to build16');
    },
    async down() {
        devLog('downgrading db back to build15?');
    },
});

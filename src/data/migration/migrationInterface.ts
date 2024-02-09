interface MigrationInterface {
    up: () => Promise<void>;
    down: () => Promise<void>;
}

export function createMigrationHandler(implementation: MigrationInterface): MigrationInterface {
    return implementation;
}

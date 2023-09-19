import { isDev } from '@/env/app';

// @todo move to .env
const devUrl = 'https://www.app-api-dm4xeuy-bwyzh75a7hm5c.eu-2.platformsh.site';
const prodUrl = 'https://www.app-api-dm4xeuy-bwyzh75a7hm5c.eu-2.platformsh.site';

export const baseUrl = isDev ? devUrl : prodUrl;

const baseEndpoint = `${baseUrl}/jsonapi`;

const LINKS = {
    __test: 'https://test.com',
    branch: `${baseEndpoint}/taxonomy_term/branch`,
    collection: `${baseEndpoint}/node/collection`,
    download: `${baseEndpoint}/node/download`,
    issue: `${baseEndpoint}/node/issue`,
    link: `${baseEndpoint}/node/link`,
    stategrade: `${baseEndpoint}/taxonomy_term/state_grade`,
    task: `${baseEndpoint}/node/task`,
    topic: `${baseEndpoint}/taxonomy_term/topic`,
};

class LinkManager {
    private links = LINKS;

    getLink(name: LinkManagerKeys): string {
        return this.links[name] || '';
    }
}

export const linkManager = new LinkManager();

export type LinkManagerKeys = keyof typeof LINKS;

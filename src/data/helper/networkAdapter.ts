import axios from 'axios';

export const adapter = axios.create({
    headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        Authorization: 'Basic anNvbl9hcGk6OVBRR0FicWpATiFnY0syQWJNLmczWg==',
    },
});

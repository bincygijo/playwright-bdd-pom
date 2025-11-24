import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    timeout: 60000,
    use: {
        headless: true,
        screenshot: 'on',
        video: 'on'
    }
};

export default config;

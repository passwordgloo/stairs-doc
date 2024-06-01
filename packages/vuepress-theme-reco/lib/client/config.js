import { defineClientConfig } from 'vuepress/client';
import { applyClientSetup } from './clientSetup.js';
import { applyClientEnhance } from './clientEnhance.js';
import * as layouts from './layouts/index.js';
export default defineClientConfig({
    enhance(...args) {
        applyClientEnhance(...args);
    },
    setup() {
        applyClientSetup();
    },
    // @ts-ignore
    layouts: layouts,
});

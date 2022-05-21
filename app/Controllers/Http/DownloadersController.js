"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DownloadersController {
    constructor() {
        this.ytCore = require('ytdl-core');
    }
    async ytdl({ request }) {
        const info = await this.ytCore.getInfo(request.input('url'));
        return info.formats;
    }
}
exports.default = DownloadersController;
//# sourceMappingURL=DownloadersController.js.map
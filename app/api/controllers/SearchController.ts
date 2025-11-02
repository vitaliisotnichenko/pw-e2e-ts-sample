import {BaseApiContext} from "@api/BaseApiContext";

export class SearchController extends BaseApiContext {
    async getSearchRequest(data: { query: string }) {
        const response = await this.request.get(
            `/api/banners/search?query=${data.query}`
        );
        return response;
    }
}
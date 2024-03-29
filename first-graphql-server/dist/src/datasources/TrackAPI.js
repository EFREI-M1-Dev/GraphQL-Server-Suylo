import { RESTDataSource } from "@apollo/datasource-rest";
export class TrackAPI extends RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
    }
    getTracks() {
        return this.get('tracks');
    }
    getAuthorBy(id) {
        return this.get(`author/${id}`);
    }
}

import { defineStore } from "pinia";
import { eUiMode, localQueryApi, localQueryApiDup, productionQueryApi, productionQueryApiDup, localAuthApi, productionAuthApi } from '../appsettings';

export const useShowtimeStore = defineStore('ShowtimeStore', {
    state: () => ({
        targetDuplicateIndex: false,
        isLocalHost:true,
        uiMode: eUiMode.Default, 
        user: null as string | null
    }),
    getters: {
        queryApi(): string {
            if(this.isLocalHost){
                return this.targetDuplicateIndex ? localQueryApiDup : localQueryApi;
            }
            else {
                return this.targetDuplicateIndex ? productionQueryApiDup : productionQueryApi;
            }
        },
        apiRoot(): string {
            const queryApiStr = this.isLocalHost ? localQueryApi : productionQueryApi;
            const index =queryApiStr.lastIndexOf('/');
            return queryApiStr.substring(0, index);
        },
        authApiRoot(): string {
            return this.isLocalHost ? localAuthApi : productionAuthApi;
        }
    }
})
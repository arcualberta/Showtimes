import { defineStore } from "pinia";
import { eUiMode, localQueryApi, localQueryApiDup, productionQueryApi, productionQueryApiDup, localAuthApi, productionAuthApi, appId,showtimesTenantId } from '../appsettings';

export const useShowtimeStore = defineStore('ShowtimeStore', {
    state: () => ({
        targetDuplicateIndex: false,
        isLocalHost:true,
        uiMode: eUiMode.Default, 
        user: null as string | null,
        apiToken: null as string | null
    }),
    getters: {
        /*
        queryApi(): string {
            if(this.isLocalHost){
                return this.targetDuplicateIndex ? localQueryApiDup : localQueryApi;
            }
            else {
                return this.targetDuplicateIndex ? productionQueryApiDup : productionQueryApi;
            }
        },
        */
        searchApiRoot(): string {
            return `${this.apiRoot}/api/SolrSearch`
        },
        apiRoot(): string {
            const apiStr = this.isLocalHost ? localQueryApi : productionQueryApi;
            return (apiStr.endsWith('/')) ? apiStr.substring(0, apiStr.length - 1) : apiStr;
        },
        authApiRoot(): string {
            return this.isLocalHost ? localAuthApi : productionAuthApi;
        },
        getApiToken(): string{
            return this.apiToken ? this.apiToken : "apiToken is empty";
        }
    },
    actions: {
        loadApiToken(): void {
             //TODO: Obtain the API token from the auth API and store it in the apiToken property.
                //https://auth.artsrn.ualberta.ca/api/api-keys/get-new?permitCount=1'
              
                var nbf = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString();
                var exp = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString();
               
                var url = `${productionAuthApi.trim()}/api/api-keys/get-new?nbf=${nbf}&exp=${exp}&tenantId=${showtimesTenantId}&appId=${appId}&permitCount=1`;
                console.log("url: " + url);
            
             fetch(url, {
                    method: 'GET',
                    headers: {
                       // 'Authorization': `bearer ${jwtToken}`,
                    }
                })
                .then(response => response.text())
               .then(data => {
                   this.apiToken = data as string;
               })
                .catch((error) => {
                    console.error('Get ApiToken Error:', error);
                });
               
            
        }
    }
});
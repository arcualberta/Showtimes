import { defineStore } from "pinia";
import { eUiMode, solrApiParent, localAuthApi, productionAuthApi, appId,showtimesTenantId } from '../appsettings';
import { api } from '@arc/arc-foundation'

export const useShowtimeStore = defineStore('ShowtimeStore', {
    state: () => ({
        targetDuplicateIndex: false,
        isLocalHost:true,
        uiMode: eUiMode.Default, 
        user: null as string | null,
        apiToken: null as string | null,
        selectedApiUrl: null as string | null,
    }),
    getters: {
        apiRoot(): string {
            //const lastIndex = this.selectedApiUrl? this.selectedApiUrl.indexOf("api"): null;
            //const apiUrl = this.selectedApiUrl? this.selectedApiUrl?.substring(0, lastIndex - 1) : `${this.apiRootParent}/solr1`
            //return apiUrl// `${this.apiRootParent}/solr1`
            return `${this.selectedApiUrl}`
        },
        getApiToken(): string {
            return this.apiToken!;
        },
        apiRootParent(): string {
            return (solrApiParent.endsWith('/')) ? solrApiParent.substring(0, solrApiParent.length - 1) : solrApiParent;
        },
        authApiRoot(): string {
            return this.isLocalHost ? localAuthApi : productionAuthApi;
        },
        getSelectedUrl(): string {
            return this.selectedApiUrl!
        }
    },
    actions: {
        async loadApiToken(): void {
            const proxy = new api.AuthProxy(productionAuthApi)
             
              
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
        },
        setSelectedApiUrl(value: string){
            this.selectedApiUrl = value;
        }
    }
});
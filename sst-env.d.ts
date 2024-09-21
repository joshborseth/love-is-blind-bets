/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "DB_KEY": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "DB_URL": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "Web": {
      "type": "sst.aws.SvelteKit"
      "url": string
    }
  }
}
export {}

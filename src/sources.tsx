import {selectionType, SourceConnector, stringType} from "./types";

export const facebook: SourceConnector = {
    pic: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path
            d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/>
    </svg>,
    collectionParameters: [
        {
            applyOnlyTo: "ads",
            displayName: "Report Fields",
            id: "fields",
            type: selectionType(["bid_amount", "adlabels", "creative", "status", "created_time", "updated_time", "targeting", "effective_status", "campaign_id", "adset_id", "conversion_specs", "recommendations", "id", "bid_info", "last_updated_by_app_id", "tracking_specs", "bid_type", "name", "account_id", "source_ad_id"])
        },
        {
            applyOnlyTo: "insights",
            displayName: "Report Fields",
            id: "fields",
            type: selectionType(["account_currency", "account_id", "account_name", "ad_id", "ad_name", "adset_id", "adset_name", "campaign_id", "campaign_name", "objective", "buying_type", "cpc", "cpm", "cpp", "ctr", "estimated_ad_recall_rate", "estimated_ad_recallers", "reach", "unique_clicks", "unique_ctr", "frequency", "actions", "conversions", "spend", "impressions"])
        }

    ],
    displayName: 'Facebook Marking',
    id: "facebook_marketing",
    collectionTypes: ['insights', 'ads'],
    configParameters: [
        {
            displayName: "Account ID",
            id: "account_id",
            type: stringType
        },
        {
            displayName: "Account ID",
            id: "access_token",
            type: stringType
        }
    ],
}


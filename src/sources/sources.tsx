import {intType, jsonType, selectionType, SourceConnector, stringType} from "./types";
import * as React from 'react';
import {allSingerTaps, SingerTap} from "./singer";


const facebook: SourceConnector = {
    pic: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path
            d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/>
    </svg>,
    collectionParameters: [
        {
            applyOnlyTo: "ads",
            displayName: "Report Fields",
            id: "fields",
            type: selectionType(["bid_amount", "adlabels", "creative", "status", "created_time", "updated_time", "targeting", "effective_status", "campaign_id", "adset_id", "conversion_specs", "recommendations", "id", "bid_info", "last_updated_by_app_id", "tracking_specs", "bid_type", "name", "account_id", "source_ad_id"]),
            required: true
        },
        {
            applyOnlyTo: "insights",
            displayName: "Report Fields",
            id: "fields",
            type: selectionType(["account_currency", "account_id", "account_name", "ad_id", "ad_name", "adset_id", "adset_name", "campaign_id", "campaign_name", "objective", "buying_type", "cpc", "cpm", "cpp", "ctr", "estimated_ad_recall_rate", "estimated_ad_recallers", "reach", "unique_clicks", "unique_ctr", "frequency", "actions", "conversions", "spend", "impressions"]),
            required: true
        },
        {
            displayName: "Level of data",
            id: "level",
            type: selectionType(["account_currency", "account_id", "account_name", "ad_id", "ad_name", "adset_id", "adset_name", "campaign_id", "campaign_name", "objective", "buying_type", "cpc", "cpm", "cpp", "ctr", "estimated_ad_recall_rate", "estimated_ad_recallers", "reach", "unique_clicks", "unique_ctr", "frequency", "actions", "conversions", "spend", "impressions"]),
            documentation:
                <>
                    One of [ad, adset, campaign, account]. <a href="https://developers.facebook.com/docs/marketing-api/reference/adgroup/insights/">Read more about level</a>
                </>
        },

    ],
    displayName: 'Facebook Marketing',
    id: "facebook_marketing",
    collectionTypes: ['insights', 'ads'],
    configParameters: [
        {
            displayName: "Account ID",
            id: "account_id",
            type: stringType,
            required: true,
            documentation: <>
                <a target="_blank" href="https://www.facebook.com/business/help/1492627900875762">How to get Facebook Account ID</a>
            </>
        },
        {
            displayName: "Access Token",
            id: "access_token",
            type: stringType,
            required: true,
            documentation: <>
                <a target="_blank" href="https://developers.facebook.com/docs/pages/access-tokens/#get-a-long-lived-user-access-token">How
                    to get Facebook Access Token</a>
            </>
        }
    ],
}

const googleAnalytics: SourceConnector = {
    pic: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <g transform="matrix(.363638 0 0 .363636 -3.272763 -2.909091)">
            <path d="M130 29v132c0 14.77 10.2 23 21 23 10 0 21-7 21-23V30c0-13.54-10-22-21-22s-21 9.33-21 21z" fill="#f9ab00"/>
            <g fill="#e37400">
                <path d="M75 96v65c0 14.77 10.2 23 21 23 10 0 21-7 21-23V97c0-13.54-10-22-21-22s-21 9.33-21 21z"/>
                <circle cx="41" cy="163" r="21"/>
            </g>
        </g>
    </svg>,
    collectionParameters: [
        {
            displayName: "Dimensions",
            id: "dimensions",
            type: selectionType(["ga:userType", "ga:visitorType", "ga:sessionCount", "ga:visitCount", "ga:daysSinceLastSession",
                "ga:userDefinedValue", "ga:userBucket", "ga:sessionDurationBucket", "ga:visitLength", "ga:referralPath",
                "ga:fullReferrer", "ga:campaign", "ga:source", "ga:medium", "ga:sourceMedium", "ga:keyword",
                "ga:adContent", "ga:socialNetwork", "ga:hasSocialSourceReferral", "ga:adGroup", "ga:adSlot",
                "ga:adDistributionNetwork", "ga:adMatchType", "ga:adKeywordMatchType", "ga:adMatchedQuery",
                "ga:adPlacementDomain", "ga:adPlacementUrl", "ga:adFormat", "ga:adTargetingType", "ga:adTargetingOption",
                "ga:adDisplayUrl", "ga:adDestinationUrl", "ga:adwordsCustomerID", "ga:adwordsCampaignID", "ga:adwordsAdGroupID",
                "ga:adwordsCreativeID", "ga:adwordsCriteriaID", "ga:adQueryWordCount", "ga:goalCompletionLocation",
                "ga:goalPreviousStep1", "ga:goalPreviousStep2", "ga:goalPreviousStep3", "ga:browser", "ga:browserVersion",
                "ga:operatingSystem", "ga:operatingSystemVersion", "ga:mobileDeviceBranding", "ga:mobileDeviceModel",
                "ga:mobileInputSelector", "ga:mobileDeviceInfo", "ga:mobileDeviceMarketingName", "ga:deviceCategory",
                "ga:continent", "ga:subContinent", "ga:country", "ga:region", "ga:metro", "ga:city", "ga:latitude", "ga:longitude",
                "ga:networkDomain", "ga:networkLocation", "ga:flashVersion", "ga:javaEnabled", "ga:language", "ga:screenColors",
                "ga:sourcePropertyDisplayName", "ga:sourcePropertyTrackingId", "ga:screenResolution", "ga:socialActivityContentUrl",
                "ga:hostname", "ga:pagePath", "ga:pagePathLevel1", "ga:pagePathLevel2", "ga:pagePathLevel3", "ga:pagePathLevel4",
                "ga:pageTitle", "ga:landingPagePath", "ga:secondPagePath", "ga:exitPagePath", "ga:previousPagePath", "ga:pageDepth",
                "ga:searchUsed", "ga:searchKeyword", "ga:searchKeywordRefinement", "ga:searchCategory", "ga:searchStartPage",
                "ga:searchDestinationPage", "ga:searchAfterDestinationPage", "ga:appInstallerId", "ga:appVersion", "ga:appName",
                "ga:appId", "ga:screenName", "ga:screenDepth", "ga:landingScreenName", "ga:exitScreenName", "ga:eventCategory", "ga:eventAction",
                "ga:eventLabel", "ga:transactionId", "ga:affiliation", "ga:sessionsToTransaction", "ga:visitsToTransaction",
                "ga:daysToTransaction", "ga:productSku", "ga:productName", "ga:productCategory", "ga:currencyCode",
                "ga:socialInteractionNetwork", "ga:socialInteractionAction", "ga:socialInteractionNetworkAction", "ga:socialInteractionTarget",
                "ga:socialEngagementType", "ga:userTimingCategory", "ga:userTimingLabel", "ga:userTimingVariable", "ga:exceptionDescription",
                "ga:experimentId", "ga:experimentVariant", "ga:dimensionXX", "ga:customVarNameXX", "ga:customVarValueXX", "ga:date", "ga:year",
                "ga:month", "ga:week", "ga:day", "ga:hour", "ga:minute", "ga:nthMonth", "ga:nthWeek", "ga:nthDay", "ga:nthMinute",
                "ga:dayOfWeek", "ga:dayOfWeekName", "ga:dateHour", "ga:dateHourMinute", "ga:yearMonth", "ga:yearWeek", "ga:isoWeek",
                "ga:isoYear", "ga:isoYearIsoWeek", "ga:dcmClickAd", "ga:dcmClickAdId", "ga:dcmClickAdType", "ga:dcmClickAdTypeId",
                "ga:dcmClickAdvertiser", "ga:dcmClickAdvertiserId", "ga:dcmClickCampaign", "ga:dcmClickCampaignId", "ga:dcmClickCreativeId",
                "ga:dcmClickCreative", "ga:dcmClickRenderingId", "ga:dcmClickCreativeType", "ga:dcmClickCreativeTypeId", "ga:dcmClickCreativeVersion",
                "ga:dcmClickSite", "ga:dcmClickSiteId", "ga:dcmClickSitePlacement", "ga:dcmClickSitePlacementId", "ga:dcmClickSpotId",
                "ga:dcmFloodlightActivity", "ga:dcmFloodlightActivityAndGroup", "ga:dcmFloodlightActivityGroup", "ga:dcmFloodlightActivityGroupId",
                "ga:dcmFloodlightActivityId", "ga:dcmFloodlightAdvertiserId", "ga:dcmFloodlightSpotId", "ga:dcmLastEventAd", "ga:dcmLastEventAdId",
                "ga:dcmLastEventAdType", "ga:dcmLastEventAdTypeId", "ga:dcmLastEventAdvertiser", "ga:dcmLastEventAdvertiserId",
                "ga:dcmLastEventAttributionType", "ga:dcmLastEventCampaign", "ga:dcmLastEventCampaignId", "ga:dcmLastEventCreativeId",
                "ga:dcmLastEventCreative", "ga:dcmLastEventRenderingId", "ga:dcmLastEventCreativeType", "ga:dcmLastEventCreativeTypeId",
                "ga:dcmLastEventCreativeVersion", "ga:dcmLastEventSite", "ga:dcmLastEventSiteId", "ga:dcmLastEventSitePlacement",
                "ga:dcmLastEventSitePlacementId", "ga:dcmLastEventSpotId", "ga:landingContentGroupXX", "ga:previousContentGroupXX",
                "ga:contentGroupXX", "ga:userAgeBracket", "ga:visitorAgeBracket", "ga:userGender", "ga:visitorGender", "ga:interestOtherCategory",
                "ga:interestAffinityCategory", "ga:interestInMarketCategory", "ga:dfpLineItemId", "ga:dfpLineItemName", "ga:acquisitionCampaign",
                "ga:acquisitionMedium", "ga:acquisitionSource", "ga:acquisitionSourceMedium", "ga:acquisitionTrafficChannel", "ga:browserSize",
                "ga:campaignCode", "ga:channelGrouping", "ga:checkoutOptions", "ga:cityId", "ga:cohort", "ga:cohortNthDay", "ga:cohortNthMonth",
                "ga:cohortNthWeek", "ga:continentId", "ga:countryIsoCode", "ga:dataSource", "ga:dbmClickAdvertiser", "ga:dbmClickAdvertiserId",
                "ga:dbmClickCreativeId", "ga:dbmClickExchange", "ga:dbmClickExchangeId", "ga:dbmClickInsertionOrder", "ga:dbmClickInsertionOrderId",
                "ga:dbmClickLineItem", "ga:dbmClickLineItemId", "ga:dbmClickSite", "ga:dbmClickSiteId", "ga:dbmLastEventAdvertiser",
                "ga:dbmLastEventAdvertiserId", "ga:dbmLastEventCreativeId", "ga:dbmLastEventExchange", "ga:dbmLastEventExchangeId",
                "ga:dbmLastEventInsertionOrder", "ga:dbmLastEventInsertionOrderId", "ga:dbmLastEventLineItem", "ga:dbmLastEventLineItemId",
                "ga:dbmLastEventSite", "ga:dbmLastEventSiteId", "ga:dsAdGroup", "ga:dsAdGroupId", "ga:dsAdvertiser", "ga:dsAdvertiserId",
                "ga:dsAgency", "ga:dsAgencyId", "ga:dsCampaign", "ga:dsCampaignId", "ga:dsEngineAccount", "ga:dsEngineAccountId", "ga:dsKeyword",
                "ga:dsKeywordId", "ga:experimentCombination", "ga:experimentName", "ga:internalPromotionCreative", "ga:internalPromotionId",
                "ga:internalPromotionName", "ga:internalPromotionPosition", "ga:isTrueViewVideoAd", "ga:metroId", "ga:nthHour", "ga:orderCouponCode",
                "ga:productBrand", "ga:productCategoryHierarchy", "ga:productCategoryLevelXX", "ga:productCouponCode", "ga:productListName",
                "ga:productListPosition", "ga:productVariant", "ga:regionId", "ga:regionIsoCode", "ga:shoppingStage", "ga:subContinentCode"], 7)
        },
        {
            displayName: "Metrics",
            id: "metrics",
            type: selectionType([
                "ga:users", "ga:visitors", "ga:newUsers", "ga:newVisits", "ga:percentNewSessions",
                "ga:percentNewVisits", "ga:1dayUsers", "ga:7dayUsers", "ga:14dayUsers", "ga:28dayUsers",
                "ga:30dayUsers", "ga:sessions", "ga:visits", "ga:bounces", "ga:bounceRate", "ga:visitBounceRate",
                "ga:sessionDuration", "ga:avgSessionDuration", "ga:organicSearches", "ga:impressions", "ga:adClicks",
                "ga:adCost", "ga:CPM", "ga:CPC", "ga:CTR", "ga:costPerTransaction", "ga:costPerGoalConversion",
                "ga:costPerConversion", "ga:RPC", "ga:ROI", "ga:margin", "ga:ROAS", "ga:goalXXStarts", "ga:goalStartsAll",
                "ga:goalXXCompletions", "ga:goalCompletionsAll", "ga:goalXXValue", "ga:goalValueAll", "ga:goalValuePerSession",
                "ga:goalValuePerVisit", "ga:goalXXConversionRate", "ga:goalConversionRateAll", "ga:goalXXAbandons", "ga:goalAbandonsAll",
                "ga:goalXXAbandonRate", "ga:goalAbandonRateAll", "ga:pageValue", "ga:entrances", "ga:entranceRate", "ga:pageviews",
                "ga:pageviewsPerSession", "ga:pageviewsPerVisit", "ga:contentGroupUniqueViewsXX", "ga:uniquePageviews", "ga:timeOnPage",
                "ga:avgTimeOnPage", "ga:exits", "ga:exitRate", "ga:searchResultViews", "ga:searchUniques", "ga:avgSearchResultViews",
                "ga:searchSessions", "ga:searchVisits", "ga:percentSessionsWithSearch", "ga:percentVisitsWithSearch", "ga:searchDepth",
                "ga:avgSearchDepth", "ga:searchRefinements", "ga:percentSearchRefinements", "ga:searchDuration", "ga:avgSearchDuration",
                "ga:searchExits", "ga:searchExitRate", "ga:searchGoalXXConversionRate", "ga:searchGoalConversionRateAll",
                "ga:goalValueAllPerSearch", "ga:pageLoadTime", "ga:pageLoadSample", "ga:avgPageLoadTime", "ga:domainLookupTime",
                "ga:avgDomainLookupTime", "ga:pageDownloadTime", "ga:avgPageDownloadTime", "ga:redirectionTime", "ga:avgRedirectionTime",
                "ga:serverConnectionTime", "ga:avgServerConnectionTime", "ga:serverResponseTime", "ga:avgServerResponseTime", "ga:speedMetricsSample",
                "ga:domInteractiveTime", "ga:avgDomInteractiveTime", "ga:domContentLoadedTime", "ga:avgDomContentLoadedTime",
                "ga:domLatencyMetricsSample", "ga:screenviews", "ga:uniqueScreenviews", "ga:uniqueAppviews", "ga:screenviewsPerSession",
                "ga:timeOnScreen", "ga:avgScreenviewDuration", "ga:totalEvents", "ga:uniqueDimensionCombinations", "ga:uniqueEvents",
                "ga:eventValue", "ga:avgEventValue", "ga:sessionsWithEvent", "ga:visitsWithEvent", "ga:eventsPerSessionWithEvent",
                "ga:eventsPerVisitWithEvent", "ga:transactions", "ga:transactionsPerSession", "ga:transactionsPerVisit", "ga:transactionRevenue",
                "ga:revenuePerTransaction", "ga:transactionRevenuePerSession", "ga:transactionRevenuePerVisit", "ga:transactionShipping",
                "ga:transactionTax", "ga:totalValue", "ga:itemQuantity", "ga:uniquePurchases", "ga:revenuePerItem", "ga:itemRevenue",
                "ga:itemsPerPurchase", "ga:localTransactionRevenue", "ga:localTransactionShipping", "ga:localTransactionTax",
                "ga:localItemRevenue", "ga:socialInteractions", "ga:uniqueSocialInteractions", "ga:socialInteractionsPerSession",
                "ga:socialInteractionsPerVisit", "ga:userTimingValue", "ga:userTimingSample", "ga:avgUserTimingValue", "ga:exceptions",
                "ga:exceptionsPerScreenview", "ga:fatalExceptions", "ga:fatalExceptionsPerScreenview", "ga:metricXX", "ga:dcmFloodlightQuantity",
                "ga:dcmFloodlightRevenue", "ga:adsenseRevenue", "ga:adsenseAdUnitsViewed", "ga:adsenseAdsViewed", "ga:adsenseAdsClicks",
                "ga:adsensePageImpressions", "ga:adsenseCTR", "ga:adsenseECPM", "ga:adsenseExits", "ga:adsenseViewableImpressionPercent",
                "ga:adsenseCoverage", "ga:totalPublisherImpressions", "ga:totalPublisherCoverage", "ga:totalPublisherMonetizedPageviews",
                "ga:totalPublisherImpressionsPerSession", "ga:totalPublisherViewableImpressionsPercent", "ga:totalPublisherClicks",
                "ga:totalPublisherCTR", "ga:totalPublisherRevenue", "ga:totalPublisherRevenuePer1000Sessions", "ga:totalPublisherECPM",
                "ga:adxImpressions", "ga:adxCoverage", "ga:adxMonetizedPageviews", "ga:adxImpressionsPerSession", "ga:adxViewableImpressionsPercent",
                "ga:adxClicks", "ga:adxCTR", "ga:adxRevenue", "ga:adxRevenuePer1000Sessions", "ga:adxECPM", "ga:dfpImpressions", "ga:dfpCoverage",
                "ga:dfpMonetizedPageviews", "ga:dfpImpressionsPerSession", "ga:dfpViewableImpressionsPercent", "ga:dfpClicks", "ga:dfpCTR",
                "ga:dfpRevenue", "ga:dfpRevenuePer1000Sessions", "ga:dfpECPM", "ga:backfillImpressions", "ga:backfillCoverage",
                "ga:backfillMonetizedPageviews", "ga:backfillImpressionsPerSession", "ga:backfillViewableImpressionsPercent", "ga:backfillClicks",
                "ga:backfillCTR", "ga:backfillRevenue", "ga:backfillRevenuePer1000Sessions", "ga:backfillECPM", "ga:buyToDetailRate",
                "ga:cartToDetailRate", "ga:cohortActiveUsers", "ga:cohortAppviewsPerUser", "ga:cohortAppviewsPerUserWithLifetimeCriteria",
                "ga:cohortGoalCompletionsPerUser", "ga:cohortGoalCompletionsPerUserWithLifetimeCriteria", "ga:cohortPageviewsPerUser",
                "ga:cohortPageviewsPerUserWithLifetimeCriteria", "ga:cohortRetentionRate", "ga:cohortRevenuePerUser",
                "ga:cohortRevenuePerUserWithLifetimeCriteria", "ga:cohortSessionDurationPerUser", "ga:cohortSessionDurationPerUserWithLifetimeCriteria",
                "ga:cohortSessionsPerUser", "ga:cohortSessionsPerUserWithLifetimeCriteria", "ga:cohortTotalUsers",
                "ga:cohortTotalUsersWithLifetimeCriteria", "ga:dbmCPA", "ga:dbmCPC", "ga:dbmCPM", "ga:dbmCTR", "ga:dbmClicks", "ga:dbmConversions",
                "ga:dbmCost", "ga:dbmImpressions", "ga:dbmROAS", "ga:dcmCPC", "ga:dcmCTR", "ga:dcmClicks", "ga:dcmCost", "ga:dcmImpressions",
                "ga:dcmMargin", "ga:dcmROAS", "ga:dcmRPC", "ga:dsCPC", "ga:dsCTR", "ga:dsClicks", "ga:dsCost", "ga:dsImpressions", "ga:dsProfit",
                "ga:dsReturnOnAdSpend", "ga:dsRevenuePerClick", "ga:hits", "ga:internalPromotionCTR", "ga:internalPromotionClicks",
                "ga:internalPromotionViews", "ga:localProductRefundAmount", "ga:localRefundAmount", "ga:productAddsToCart", "ga:productCheckouts",
                "ga:productDetailViews", "ga:productListCTR", "ga:productListClicks", "ga:productListViews", "ga:productRefundAmount", "ga:productRefunds",
                "ga:productRemovesFromCart", "ga:productRevenuePerPurchase", "ga:quantityAddedToCart", "ga:quantityCheckedOut", "ga:quantityRefunded",
                "ga:quantityRemovedFromCart", "ga:refundAmount", "ga:revenuePerUser", "ga:sessionsPerUser", "ga:totalRefunds", "ga:transactionsPerUser"
            ], 10)
        }

    ],
    displayName: 'Google Analytics',
    id: "google_analytics",
    collectionTypes: ['report'],
    configParameters: [
        {
            displayName: "View ID",
            id: "view_id",
            type: stringType,
            required: true
        },
        {
            displayName: "Auth (Client ID)",
            id: "auth.client_id",
            type: stringType
        },
        {
            displayName: "Auth (Client Secret)",
            id: "auth.client_secret",
            type: stringType
        },
        {
            displayName: "Auth (Refresh Token)",
            id: "auth.refresh_token",
            type: stringType
        },
        {
            displayName: "Auth (Service account key JSON)",
            id: "auth.service_account_key",
            type: jsonType
        },
    ],
}

const googlePlay: SourceConnector = {
    pic: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#4db6ac" d="M7.705,4.043C7.292,4.15,7,4.507,7,5.121c0,1.802,0,18.795,0,18.795S7,42.28,7,43.091c0,0.446,0.197,0.745,0.5,0.856l20.181-20.064L7.705,4.043z"/>
        <path fill="#dce775" d="M33.237,18.36l-8.307-4.796c0,0-15.245-8.803-16.141-9.32C8.401,4.02,8.019,3.961,7.705,4.043l19.977,19.84L33.237,18.36z"/>
        <path fill="#d32f2f" d="M8.417,43.802c0.532-0.308,15.284-8.825,24.865-14.357l-5.601-5.562L7.5,43.947C7.748,44.038,8.066,44.004,8.417,43.802z"/>
        <path fill="#fbc02d" d="M41.398,23.071c-0.796-0.429-8.1-4.676-8.1-4.676l-0.061-0.035l-5.556,5.523l5.601,5.562c4.432-2.559,7.761-4.48,8.059-4.653C42.285,24.248,42.194,23.5,41.398,23.071z"/>
    </svg>,
    displayName: 'Google Play',
    id: "google_play",
    collectionTypes: ['earnings', 'sales'],
    collectionParameters: [],
    configParameters: [
        {
            displayName: "Account ID",
            id: "account_id",
            type: stringType,
            required: true
        },
        {
            displayName: "Auth (Client ID)",
            id: "auth.client_id",
            type: stringType
        },
        {
            displayName: "Auth (Client Secret)",
            id: "auth.client_secret",
            type: stringType

        },
        {
            displayName: "Auth (Refresh Token)",
            id: "auth.refresh_token",
            type: stringType
        },
        {
            displayName: "Auth (Service account key JSON)",
            id: "auth.service_account_key",
            type: jsonType
        },
    ],
}

const firebase: SourceConnector = {
    pic: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"/>
        <path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"/>
        <path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"/>
        <path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"/>
    </svg>,
    displayName: 'Firebase',
    id: "firebase",
    collectionTypes: ['users', 'firestore'],
    collectionParameters: [
        {
            applyOnlyTo: "firestore",
            displayName: "Firestore Collection",
            id: "collection",
            type: stringType,
            required: true
        }
    ],
    configParameters: [
        {
            displayName: "Project ID",
            id: "project_id",
            type: stringType,
            required: true
        },
        {
            displayName: "Service Account Key",
            id: "key",
            type: jsonType,
            required: true
        },
    ],
}

const redis: SourceConnector = {
    pic: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"/>
        <path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"/>
        <path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"/>
        <path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"/>
    </svg>,
    displayName: 'Redis',
    id: "redis",
    collectionTypes: ['hash'],
    collectionParameters: [],
    configParameters: [
        {
            displayName: "Redis Host",
            id: "host",
            type: stringType,
            required: true
        },
        {
            displayName: "Redis Port",
            id: "port",
            type: intType,
        },
        {
            displayName: "Redis Password",
            id: "password",
            type: stringType,
        },
    ],
}


const singerPic = <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 558.000000 558.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,558.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path
            d="M0 2790 l0 -2790 2790 0 2790 0 0 2790 0 2790 -2790 0 -2790 0 0 -2790z m2229 1034 c114 -32 201 -143 201 -255 0 -62 -36 -139 -90 -190 -40 -39 -59 -50 -114 -62 -59 -13 -73 -13 -123 0 -85 22 -133 60 -175 138 -30 56 -30 175 -1 232 24 46 65 93 82 93 6 0 11 4 11 10 0 9 109 48 138 49 7 1 39 -6 71 -15z m2811 -254 l0 -180 -1120 0 -1120 0 0 180 0 180 1120 0 1120 0 0 -180z m-3533 -560 c60 -37 100 -86 122 -152 25 -75 26 -85 4 -151 -40 -124 -128 -190 -253 -191 -53 0 -75 5 -118 29 -30 16 -65 43 -78 60 -13 16 -29 35 -34 42 -33 41 -35 183 -3 250 26 56 109 125 164 136 56 12 157 0 196 -23z m3528 -215 l0 -180 -1510 0 -1510 0 -3 170 c-1 93 0 175 2 182 4 11 289 13 1513 11 l1508 -3 0 -180z m-1954 -538 c80 -39 130 -110 137 -192 10 -133 -27 -213 -125 -271 -42 -24 -58 -28 -128 -28 -69 0 -86 4 -127 28 -156 91 -184 293 -57 417 84 81 194 98 300 46z m1957 -234 l2 -183 -720 0 -720 0 0 185 0 185 718 -2 717 -3 3 -182z"/>
    </g>
</svg>;

/**
 * Not a common Source connector.
 */
const
    singer = (singerTap?: SingerTap): SourceConnector => {
        return {
            pic: singerTap?.pic || singerPic,
            displayName: singerTap?.displayName || "Singer Tap",
            id: `singer-${singerTap?.tap}`,
            collectionTypes: [],
            collectionParameters: [],
            configParameters: [
                {
                    displayName: "Singer Tap",
                    id: "tap",
                    type: selectionType(allSingerTaps.map(tap => tap.tap)),
                    required: true,
                    documentation: <>Id of Singer Tap</>,
                    constant: singerTap?.tap || undefined
                },
                {
                    displayName: "Singer Config JSON",
                    id: "config",
                    type: jsonType,
                    required: true,
                    documentation: <>
                        <a target="_blank" href="https://github.com/singer-io/getting-started/blob/master/docs/SPEC.md#config">Read more about Singer Config</a>
                    </>
                },
                {
                    displayName: "Singer Catalog JSON",
                    id: "catalog",
                    type: jsonType,
                    required: true,
                    documentation: <>
                        <a href="https://github.com/singer-io/getting-started/blob/master/docs/SPEC.md#catalog">Read more about Singer Catalog</a>
                    </>
                },
                {
                    displayName: "Singer State JSON",
                    id: "state",
                    type: jsonType,
                    documentation: <>
                        <a target="_blank" href="https://github.com/singer-io/getting-started/blob/master/docs/SPEC.md#state">Read more about Singer State</a>
                    </>
                },
                {
                    displayName: "Singer Properties JSON",
                    id: "properties",
                    type: jsonType,
                    documentation: <>
                        Used by some legacy taps (e.g. <a target="_blank" href="https://github.com/singer-io/tap-facebook">Facebook tap</a>)
                    </>
                },
            ],
        }
    }

export const allSources = [
        facebook, redis, firebase, googleAnalytics, googlePlay,
        singer(), ...allSingerTaps.filter(tap => !tap.hasNativeEquivalent && tap.pic).map(tap => singer(tap))
    ]




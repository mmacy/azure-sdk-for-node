/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the Location class.
 * @constructor
 * Location information.
 * @member {string} [id] Gets or sets the ID of the resource
 * (/subscriptions/SubscriptionId).
 * 
 * @member {string} [subscriptionId] Gets or sets the subscription Id.
 * 
 * @member {string} [name] Gets or sets the location name
 * 
 * @member {string} [displayName] Gets or sets the display name of the location
 * 
 * @member {string} [latitude] Gets or sets the latitude of the location
 * 
 * @member {string} [longitude] Gets or sets the longitude of the location
 * 
 */
export interface Location {
    id?: string;
    subscriptionId?: string;
    name?: string;
    displayName?: string;
    latitude?: string;
    longitude?: string;
}

/**
 * @class
 * Initializes a new instance of the Subscription class.
 * @constructor
 * Subscription information.
 * @member {string} [id] Gets or sets the ID of the resource
 * (/subscriptions/SubscriptionId).
 * 
 * @member {string} [subscriptionId] Gets or sets the subscription Id.
 * 
 * @member {string} [displayName] Gets or sets the subscription display name
 * 
 * @member {string} [state] Gets or sets the subscription state
 * 
 */
export interface Subscription {
    id?: string;
    subscriptionId?: string;
    displayName?: string;
    state?: string;
}

/**
 * @class
 * Initializes a new instance of the TenantIdDescription class.
 * @constructor
 * Tenant Id information
 * @member {string} [id] Gets or sets Id
 * 
 * @member {string} [tenantId] Gets or sets tenantId
 * 
 */
export interface TenantIdDescription {
    id?: string;
    tenantId?: string;
}

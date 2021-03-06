/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.InputSchemaMapping = require('./inputSchemaMapping');
exports.Resource = require('./resource');
exports.TrackedResource = require('./trackedResource');
exports.Domain = require('./domain');
exports.DomainUpdateParameters = require('./domainUpdateParameters');
exports.DomainSharedAccessKeys = require('./domainSharedAccessKeys');
exports.DomainRegenerateKeyRequest = require('./domainRegenerateKeyRequest');
exports.DomainTopic = require('./domainTopic');
exports.EventSubscriptionDestination = require('./eventSubscriptionDestination');
exports.AdvancedFilter = require('./advancedFilter');
exports.EventSubscriptionFilter = require('./eventSubscriptionFilter');
exports.RetryPolicy = require('./retryPolicy');
exports.DeadLetterDestination = require('./deadLetterDestination');
exports.NumberInAdvancedFilter = require('./numberInAdvancedFilter');
exports.StorageBlobDeadLetterDestination = require('./storageBlobDeadLetterDestination');
exports.NumberNotInAdvancedFilter = require('./numberNotInAdvancedFilter');
exports.NumberLessThanAdvancedFilter = require('./numberLessThanAdvancedFilter');
exports.NumberGreaterThanAdvancedFilter = require('./numberGreaterThanAdvancedFilter');
exports.NumberLessThanOrEqualsAdvancedFilter = require('./numberLessThanOrEqualsAdvancedFilter');
exports.NumberGreaterThanOrEqualsAdvancedFilter = require('./numberGreaterThanOrEqualsAdvancedFilter');
exports.BoolEqualsAdvancedFilter = require('./boolEqualsAdvancedFilter');
exports.StringInAdvancedFilter = require('./stringInAdvancedFilter');
exports.StringNotInAdvancedFilter = require('./stringNotInAdvancedFilter');
exports.StringBeginsWithAdvancedFilter = require('./stringBeginsWithAdvancedFilter');
exports.StringEndsWithAdvancedFilter = require('./stringEndsWithAdvancedFilter');
exports.StringContainsAdvancedFilter = require('./stringContainsAdvancedFilter');
exports.WebHookEventSubscriptionDestination = require('./webHookEventSubscriptionDestination');
exports.EventHubEventSubscriptionDestination = require('./eventHubEventSubscriptionDestination');
exports.StorageQueueEventSubscriptionDestination = require('./storageQueueEventSubscriptionDestination');
exports.HybridConnectionEventSubscriptionDestination = require('./hybridConnectionEventSubscriptionDestination');
exports.EventSubscription = require('./eventSubscription');
exports.EventSubscriptionUpdateParameters = require('./eventSubscriptionUpdateParameters');
exports.EventSubscriptionFullUrl = require('./eventSubscriptionFullUrl');
exports.OperationInfo = require('./operationInfo');
exports.Operation = require('./operation');
exports.JsonField = require('./jsonField');
exports.JsonFieldWithDefault = require('./jsonFieldWithDefault');
exports.JsonInputSchemaMapping = require('./jsonInputSchemaMapping');
exports.Topic = require('./topic');
exports.TopicUpdateParameters = require('./topicUpdateParameters');
exports.TopicSharedAccessKeys = require('./topicSharedAccessKeys');
exports.TopicRegenerateKeyRequest = require('./topicRegenerateKeyRequest');
exports.EventType = require('./eventType');
exports.TopicTypeInfo = require('./topicTypeInfo');
exports.DomainsListResult = require('./domainsListResult');
exports.DomainTopicsListResult = require('./domainTopicsListResult');
exports.EventSubscriptionsListResult = require('./eventSubscriptionsListResult');
exports.OperationsListResult = require('./operationsListResult');
exports.TopicsListResult = require('./topicsListResult');
exports.EventTypesListResult = require('./eventTypesListResult');
exports.TopicTypesListResult = require('./topicTypesListResult');
exports.discriminators = {
  'InputSchemaMapping' : exports.InputSchemaMapping,
  'EventSubscriptionDestination' : exports.EventSubscriptionDestination,
  'AdvancedFilter' : exports.AdvancedFilter,
  'DeadLetterDestination' : exports.DeadLetterDestination,
  'AdvancedFilter.NumberIn' : exports.NumberInAdvancedFilter,
  'DeadLetterDestination.StorageBlob' : exports.StorageBlobDeadLetterDestination,
  'AdvancedFilter.NumberNotIn' : exports.NumberNotInAdvancedFilter,
  'AdvancedFilter.NumberLessThan' : exports.NumberLessThanAdvancedFilter,
  'AdvancedFilter.NumberGreaterThan' : exports.NumberGreaterThanAdvancedFilter,
  'AdvancedFilter.NumberLessThanOrEquals' : exports.NumberLessThanOrEqualsAdvancedFilter,
  'AdvancedFilter.NumberGreaterThanOrEquals' : exports.NumberGreaterThanOrEqualsAdvancedFilter,
  'AdvancedFilter.BoolEquals' : exports.BoolEqualsAdvancedFilter,
  'AdvancedFilter.StringIn' : exports.StringInAdvancedFilter,
  'AdvancedFilter.StringNotIn' : exports.StringNotInAdvancedFilter,
  'AdvancedFilter.StringBeginsWith' : exports.StringBeginsWithAdvancedFilter,
  'AdvancedFilter.StringEndsWith' : exports.StringEndsWithAdvancedFilter,
  'AdvancedFilter.StringContains' : exports.StringContainsAdvancedFilter,
  'EventSubscriptionDestination.WebHook' : exports.WebHookEventSubscriptionDestination,
  'EventSubscriptionDestination.EventHub' : exports.EventHubEventSubscriptionDestination,
  'EventSubscriptionDestination.StorageQueue' : exports.StorageQueueEventSubscriptionDestination,
  'EventSubscriptionDestination.HybridConnection' : exports.HybridConnectionEventSubscriptionDestination,
  'InputSchemaMapping.Json' : exports.JsonInputSchemaMapping
};

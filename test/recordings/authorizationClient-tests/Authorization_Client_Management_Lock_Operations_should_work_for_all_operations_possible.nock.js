// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4712/providers/Microsoft.Authorization/locks/testlock1?api-version=2015-01-01', '*')
  .reply(201, "{\"properties\":{\"level\":\"CanNotDelete\",\"notes\":\"Optional text.\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4712/providers/Microsoft.Authorization/locks/testlock1\",\"type\":\"Microsoft.Authorization/locks\",\"name\":\"testlock1\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:e3834ac8-2f56-4376-83f3-74aad6b99a41',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '55f719f2-f575-4ba2-83c4-0a8df30051a3',
  'x-ms-routing-request-id': 'WESTUS:20160127T030101Z:55f719f2-f575-4ba2-83c4-0a8df30051a3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Jan 2016 03:01:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4712/providers/Microsoft.Authorization/locks/testlock1?api-version=2015-01-01', '*')
  .reply(201, "{\"properties\":{\"level\":\"CanNotDelete\",\"notes\":\"Optional text.\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4712/providers/Microsoft.Authorization/locks/testlock1\",\"type\":\"Microsoft.Authorization/locks\",\"name\":\"testlock1\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:e3834ac8-2f56-4376-83f3-74aad6b99a41',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '55f719f2-f575-4ba2-83c4-0a8df30051a3',
  'x-ms-routing-request-id': 'WESTUS:20160127T030101Z:55f719f2-f575-4ba2-83c4-0a8df30051a3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Jan 2016 03:01:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/locks/testlock1?api-version=2015-01-01')
  .reply(404, "{\"error\":{\"code\":\"LockNotFound\",\"message\":\"The lock 'testlock1' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '86',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:e17da8bb-ac66-4e84-b0f2-c787fb3ec742',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'd560e6fa-21a9-4e8f-878f-b2d40182b078',
  'x-ms-routing-request-id': 'WESTUS:20160127T030101Z:d560e6fa-21a9-4e8f-878f-b2d40182b078',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Jan 2016 03:01:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/locks/testlock1?api-version=2015-01-01')
  .reply(404, "{\"error\":{\"code\":\"LockNotFound\",\"message\":\"The lock 'testlock1' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '86',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:e17da8bb-ac66-4e84-b0f2-c787fb3ec742',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'd560e6fa-21a9-4e8f-878f-b2d40182b078',
  'x-ms-routing-request-id': 'WESTUS:20160127T030101Z:d560e6fa-21a9-4e8f-878f-b2d40182b078',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Jan 2016 03:01:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4712/providers/Microsoft.Authorization/locks?api-version=2015-01-01')
  .reply(200, "{\"value\":[{\"properties\":{\"level\":\"CanNotDelete\",\"notes\":\"Optional text.\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4712/providers/Microsoft.Authorization/locks/testlock1\",\"type\":\"Microsoft.Authorization/locks\",\"name\":\"testlock1\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '276',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:9ab0b445-2f7e-483b-87bf-b286901c9d2c',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'db59b3bf-3be8-4b52-9dec-28f4b112745b',
  'x-ms-routing-request-id': 'WESTUS:20160127T030102Z:db59b3bf-3be8-4b52-9dec-28f4b112745b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Jan 2016 03:01:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4712/providers/Microsoft.Authorization/locks?api-version=2015-01-01')
  .reply(200, "{\"value\":[{\"properties\":{\"level\":\"CanNotDelete\",\"notes\":\"Optional text.\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4712/providers/Microsoft.Authorization/locks/testlock1\",\"type\":\"Microsoft.Authorization/locks\",\"name\":\"testlock1\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '276',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:9ab0b445-2f7e-483b-87bf-b286901c9d2c',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'db59b3bf-3be8-4b52-9dec-28f4b112745b',
  'x-ms-routing-request-id': 'WESTUS:20160127T030102Z:db59b3bf-3be8-4b52-9dec-28f4b112745b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Jan 2016 03:01:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/locks?api-version=2015-01-01')
  .reply(200, "{\"value\":[{\"properties\":{\"level\":\"CanNotDelete\",\"notes\":\"Optional text.\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4712/providers/Microsoft.Authorization/locks/testlock1\",\"type\":\"Microsoft.Authorization/locks\",\"name\":\"testlock1\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '276',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:f4df2a6c-8ccd-4fb1-b3c7-68407893060b',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'f587afa5-49c7-4084-919c-ab1c5a609182',
  'x-ms-routing-request-id': 'WESTUS:20160127T030102Z:f587afa5-49c7-4084-919c-ab1c5a609182',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Jan 2016 03:01:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/locks?api-version=2015-01-01')
  .reply(200, "{\"value\":[{\"properties\":{\"level\":\"CanNotDelete\",\"notes\":\"Optional text.\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4712/providers/Microsoft.Authorization/locks/testlock1\",\"type\":\"Microsoft.Authorization/locks\",\"name\":\"testlock1\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '276',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:f4df2a6c-8ccd-4fb1-b3c7-68407893060b',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'f587afa5-49c7-4084-919c-ab1c5a609182',
  'x-ms-routing-request-id': 'WESTUS:20160127T030102Z:f587afa5-49c7-4084-919c-ab1c5a609182',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Jan 2016 03:01:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4712/providers/Microsoft.Authorization/locks/testlock1?api-version=2015-01-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'westus:ddc7401a-963d-48ec-8889-5093822903c8',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '17009cc2-ad80-4206-9819-48d5c4191265',
  'x-ms-routing-request-id': 'WESTUS:20160127T030103Z:17009cc2-ad80-4206-9819-48d5c4191265',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Jan 2016 03:01:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4712/providers/Microsoft.Authorization/locks/testlock1?api-version=2015-01-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'westus:ddc7401a-963d-48ec-8889-5093822903c8',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '17009cc2-ad80-4206-9819-48d5c4191265',
  'x-ms-routing-request-id': 'WESTUS:20160127T030103Z:17009cc2-ad80-4206-9819-48d5c4191265',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Jan 2016 03:01:02 GMT',
  connection: 'close' });
 return result; }]];
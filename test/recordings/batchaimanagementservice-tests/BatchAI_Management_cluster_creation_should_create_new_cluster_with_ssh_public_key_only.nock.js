// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'northeurope';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster8?api-version=2018-05-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationstatuses/0d07ab66-788e-459b-961e-e817160dc9d3?api-version=2018-05-01',
  'retry-after': '15',
  'request-id': '03d637c2-c361-4b7f-ad7c-6f7c15c82d55',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/0d07ab66-788e-459b-961e-e817160dc9d3?api-version=2018-05-01',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5b0c68d9-e4fb-4490-97c0-9e9395ec6cf1',
  'x-ms-correlation-request-id': '5b0c68d9-e4fb-4490-97c0-9e9395ec6cf1',
  'x-ms-routing-request-id': 'WESTUS:20180614T034932Z:5b0c68d9-e4fb-4490-97c0-9e9395ec6cf1',
  date: 'Thu, 14 Jun 2018 03:49:32 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster8?api-version=2018-05-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationstatuses/0d07ab66-788e-459b-961e-e817160dc9d3?api-version=2018-05-01',
  'retry-after': '15',
  'request-id': '03d637c2-c361-4b7f-ad7c-6f7c15c82d55',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/0d07ab66-788e-459b-961e-e817160dc9d3?api-version=2018-05-01',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5b0c68d9-e4fb-4490-97c0-9e9395ec6cf1',
  'x-ms-correlation-request-id': '5b0c68d9-e4fb-4490-97c0-9e9395ec6cf1',
  'x-ms-routing-request-id': 'WESTUS:20180614T034932Z:5b0c68d9-e4fb-4490-97c0-9e9395ec6cf1',
  date: 'Thu, 14 Jun 2018 03:49:32 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/0d07ab66-788e-459b-961e-e817160dc9d3?api-version=2018-05-01')
  .reply(200, "{\"id\":\"https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/0d07ab66-788e-459b-961e-e817160dc9d3\",\"name\":\"0d07ab66-788e-459b-961e-e817160dc9d3\",\"status\":\"Succeeded\",\"startTime\":\"2018-06-14T03:49:32.859Z\",\"endTime\":\"2018-06-14T03:49:48.638Z\",\"properties\":{\"resourceId\":\"00000000-0000-0000-0000-000000000000$nodetestgroup1941$workspace$cluster8\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '439',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd49d53ff-4816-4adb-bc47-ab2026069114',
  'request-id': '23ea725d-4a36-4245-b352-82be8ff53407',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'd49d53ff-4816-4adb-bc47-ab2026069114',
  'x-ms-routing-request-id': 'WESTUS:20180614T035004Z:d49d53ff-4816-4adb-bc47-ab2026069114',
  date: 'Thu, 14 Jun 2018 03:50:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/0d07ab66-788e-459b-961e-e817160dc9d3?api-version=2018-05-01')
  .reply(200, "{\"id\":\"https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/0d07ab66-788e-459b-961e-e817160dc9d3\",\"name\":\"0d07ab66-788e-459b-961e-e817160dc9d3\",\"status\":\"Succeeded\",\"startTime\":\"2018-06-14T03:49:32.859Z\",\"endTime\":\"2018-06-14T03:49:48.638Z\",\"properties\":{\"resourceId\":\"00000000-0000-0000-0000-000000000000$nodetestgroup1941$workspace$cluster8\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '439',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd49d53ff-4816-4adb-bc47-ab2026069114',
  'request-id': '23ea725d-4a36-4245-b352-82be8ff53407',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'd49d53ff-4816-4adb-bc47-ab2026069114',
  'x-ms-routing-request-id': 'WESTUS:20180614T035004Z:d49d53ff-4816-4adb-bc47-ab2026069114',
  date: 'Thu, 14 Jun 2018 03:50:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster8?api-version=2018-05-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster8\",\"name\":\"cluster8\",\"type\":\"Microsoft.BatchAI/workspaces/clusters\",\"properties\":{\"provisioningState\":\"succeeded\",\"allocationState\":\"steady\",\"creationTime\":\"2018-06-14T03:49:32.844Z\",\"allocationStateTransitionTime\":\"2018-06-14T03:49:49.247Z\",\"provisioningStateTransitionTime\":\"2018-06-14T03:49:48.623Z\",\"vmSize\":\"STANDARD_D1\",\"currentNodeCount\":0,\"nodeStateCounts\":{\"runningNodeCount\":0,\"idleNodeCount\":0,\"unusableNodeCount\":0,\"preparingNodeCount\":0,\"leavingNodeCount\":0},\"vmPriority\":\"dedicated\",\"scaleSettings\":{\"manual\":{\"targetNodeCount\":0,\"nodeDeallocationOption\":\"requeue\"}},\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"}},\"userAccountSettings\":{\"adminUserName\":\"username\",\"adminUserSshPublicKey\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDA/2AXum+BQkHvli+y9eG9kBd90X0kniEGPqR5AXo6zCty8iU+Bm8yOUqpkTIrx70S32nml35N8WBy+KVmgHOkUEItpK/b25Fuo8mBUDDIISRCKmcy+OUHdFQ6E1UWYEwrb01eLOVDeg2YsTp0xr5Rc6lgoItG6b7gTTXnyhY42B9X5ey5yAp3RwpUdWaZUdGAkZ4Yn9cnOmf+atH+St8LImeiYoAkhr0cPnDIrylguM+CfAmuFmbpIZfsR4alH8rGhMD19jHVNbBLABJuyZkQrUz5XG+M6dL3Wzze9wKnilmRfiCW+kXnJULQB35S8fVHkeTfJTph5uLkh0yrQ5Yj has_no_private_key\"}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1351',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 14 Jun 2018 03:49:32 GMT',
  etag: '"0x8D5D1A9D6EEB7DD"',
  'x-ms-request-id': '1ffff8b2-f607-4faa-9162-9e9ec5a43b44',
  'request-id': 'c0302970-3f39-4beb-97ca-d637b24ec641',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '1ffff8b2-f607-4faa-9162-9e9ec5a43b44',
  'x-ms-routing-request-id': 'WESTUS:20180614T035005Z:1ffff8b2-f607-4faa-9162-9e9ec5a43b44',
  date: 'Thu, 14 Jun 2018 03:50:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster8?api-version=2018-05-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster8\",\"name\":\"cluster8\",\"type\":\"Microsoft.BatchAI/workspaces/clusters\",\"properties\":{\"provisioningState\":\"succeeded\",\"allocationState\":\"steady\",\"creationTime\":\"2018-06-14T03:49:32.844Z\",\"allocationStateTransitionTime\":\"2018-06-14T03:49:49.247Z\",\"provisioningStateTransitionTime\":\"2018-06-14T03:49:48.623Z\",\"vmSize\":\"STANDARD_D1\",\"currentNodeCount\":0,\"nodeStateCounts\":{\"runningNodeCount\":0,\"idleNodeCount\":0,\"unusableNodeCount\":0,\"preparingNodeCount\":0,\"leavingNodeCount\":0},\"vmPriority\":\"dedicated\",\"scaleSettings\":{\"manual\":{\"targetNodeCount\":0,\"nodeDeallocationOption\":\"requeue\"}},\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"}},\"userAccountSettings\":{\"adminUserName\":\"username\",\"adminUserSshPublicKey\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDA/2AXum+BQkHvli+y9eG9kBd90X0kniEGPqR5AXo6zCty8iU+Bm8yOUqpkTIrx70S32nml35N8WBy+KVmgHOkUEItpK/b25Fuo8mBUDDIISRCKmcy+OUHdFQ6E1UWYEwrb01eLOVDeg2YsTp0xr5Rc6lgoItG6b7gTTXnyhY42B9X5ey5yAp3RwpUdWaZUdGAkZ4Yn9cnOmf+atH+St8LImeiYoAkhr0cPnDIrylguM+CfAmuFmbpIZfsR4alH8rGhMD19jHVNbBLABJuyZkQrUz5XG+M6dL3Wzze9wKnilmRfiCW+kXnJULQB35S8fVHkeTfJTph5uLkh0yrQ5Yj has_no_private_key\"}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1351',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 14 Jun 2018 03:49:32 GMT',
  etag: '"0x8D5D1A9D6EEB7DD"',
  'x-ms-request-id': '1ffff8b2-f607-4faa-9162-9e9ec5a43b44',
  'request-id': 'c0302970-3f39-4beb-97ca-d637b24ec641',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '1ffff8b2-f607-4faa-9162-9e9ec5a43b44',
  'x-ms-routing-request-id': 'WESTUS:20180614T035005Z:1ffff8b2-f607-4faa-9162-9e9ec5a43b44',
  date: 'Thu, 14 Jun 2018 03:50:04 GMT',
  connection: 'close' });
 return result; }]];
// This file has been autogenerated.

exports.setEnvironment = function () {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0?api-version=2015-12-01')
  .reply(200, "{\"id\":\"my_application_id\",\"version\":\"v1.0\",\"storageUrl\":\"https://nodesdkteststorage.blob.core.windows.net/app-my-application-id-b9dfc2b75e089960a922be9b4180a01f29ca0c78/my_application_id-v1.0-f9a1af10-e6e3-4098-9f30-746ffd0b9d9b?sv=2014-02-14&sr=b&sig=F1dIX%2Bq7IkVYGFQzw1fJ7NRbRGyt3COHS8KtIZ3sDqA%3D&st=2016-03-10T23%3A44%3A28Z&se=2016-03-11T03%3A49%3A28Z&sp=r\",\"storageUrlExpiry\":\"2016-03-11T03:49:28.1916441Z\",\"state\":\"active\",\"format\":\"zip\",\"lastActivationTime\":\"2016-03-10T23:49:21.7581922Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '497',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 10 Mar 2016 23:49:22 GMT',
  etag: '0x8D3493E9A9EF429',
  'request-id': '3e570be5-3c97-4c06-be5c-da434ca11b58',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '359394bf-1f0f-4ce0-9971-b85ed9518d34',
  'x-ms-correlation-request-id': '359394bf-1f0f-4ce0-9971-b85ed9518d34',
  'x-ms-routing-request-id': 'WESTUS:20160310T234928Z:359394bf-1f0f-4ce0-9971-b85ed9518d34',
  date: 'Thu, 10 Mar 2016 23:49:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0?api-version=2015-12-01')
  .reply(200, "{\"id\":\"my_application_id\",\"version\":\"v1.0\",\"storageUrl\":\"https://nodesdkteststorage.blob.core.windows.net/app-my-application-id-b9dfc2b75e089960a922be9b4180a01f29ca0c78/my_application_id-v1.0-f9a1af10-e6e3-4098-9f30-746ffd0b9d9b?sv=2014-02-14&sr=b&sig=F1dIX%2Bq7IkVYGFQzw1fJ7NRbRGyt3COHS8KtIZ3sDqA%3D&st=2016-03-10T23%3A44%3A28Z&se=2016-03-11T03%3A49%3A28Z&sp=r\",\"storageUrlExpiry\":\"2016-03-11T03:49:28.1916441Z\",\"state\":\"active\",\"format\":\"zip\",\"lastActivationTime\":\"2016-03-10T23:49:21.7581922Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '497',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 10 Mar 2016 23:49:22 GMT',
  etag: '0x8D3493E9A9EF429',
  'request-id': '3e570be5-3c97-4c06-be5c-da434ca11b58',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '359394bf-1f0f-4ce0-9971-b85ed9518d34',
  'x-ms-correlation-request-id': '359394bf-1f0f-4ce0-9971-b85ed9518d34',
  'x-ms-routing-request-id': 'WESTUS:20160310T234928Z:359394bf-1f0f-4ce0-9971-b85ed9518d34',
  date: 'Thu, 10 Mar 2016 23:49:27 GMT',
  connection: 'close' });
 return result; }]];
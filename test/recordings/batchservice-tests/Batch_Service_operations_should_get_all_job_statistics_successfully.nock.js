// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/lifetimejobstats?api-version=2017-06-01.5.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#jobstats/@Element\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/lifetimejobstats\",\"startTime\":\"2017-05-26T16:19:27.0644752Z\",\"lastUpdateTime\":\"2017-07-20T19:00:00Z\",\"userCPUTime\":\"PT1M54.611S\",\"kernelCPUTime\":\"PT0.188S\",\"wallClockTime\":\"PT1M54.611S\",\"readIOps\":\"2\",\"writeIOps\":\"522\",\"readIOGiB\":2.1606683731079102E-07,\"writeIOGiB\":7.282942533493042E-06,\"numTaskRetries\":\"0\",\"numSucceededTasks\":\"30\",\"numFailedTasks\":\"20\",\"waitTime\":\"PT4M17.182S\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4f1f4610-fef8-4357-97a5-43445313abc7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 20 Jul 2017 20:12:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/lifetimejobstats?api-version=2017-06-01.5.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#jobstats/@Element\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/lifetimejobstats\",\"startTime\":\"2017-05-26T16:19:27.0644752Z\",\"lastUpdateTime\":\"2017-07-20T19:00:00Z\",\"userCPUTime\":\"PT1M54.611S\",\"kernelCPUTime\":\"PT0.188S\",\"wallClockTime\":\"PT1M54.611S\",\"readIOps\":\"2\",\"writeIOps\":\"522\",\"readIOGiB\":2.1606683731079102E-07,\"writeIOGiB\":7.282942533493042E-06,\"numTaskRetries\":\"0\",\"numSucceededTasks\":\"30\",\"numFailedTasks\":\"20\",\"waitTime\":\"PT4M17.182S\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4f1f4610-fef8-4357-97a5-43445313abc7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 20 Jul 2017 20:12:30 GMT',
  connection: 'close' });
 return result; }]];
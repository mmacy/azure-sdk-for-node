// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/lifetimepoolstats?api-version=2017-06-01.5.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#poolstats/@Element\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/lifetimepoolstats\",\"usageStats\":{\r\n    \"startTime\":\"2017-05-26T16:19:27.0644752Z\",\"lastUpdateTime\":\"2017-07-20T19:00:00Z\",\"dedicatedCoreTime\":\"PT4H50M26.903S\"\r\n  },\"resourceStats\":{\r\n    \"startTime\":\"2017-05-26T16:19:27.0644752Z\",\"diskReadIOps\":\"226\",\"diskWriteIOps\":\"57238\",\"lastUpdateTime\":\"2017-07-20T19:00:00Z\",\"avgCPUPercentage\":1.4050073280151554,\"avgMemoryGiB\":0.5743197621274504,\"peakMemoryGiB\":1.0807723999023437,\"avgDiskGiB\":0.026134560419552685,\"peakDiskGiB\":0.060092926025390625,\"diskReadGiB\":0.0036163330078125,\"diskWriteGiB\":6.4845428466796875,\"networkReadGiB\":0.032594382762908936,\"networkWriteGiB\":0.024887630715966225\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '985e3c81-b44d-4d89-ba4c-7b6cde002ce7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 20 Jul 2017 20:06:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/lifetimepoolstats?api-version=2017-06-01.5.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#poolstats/@Element\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/lifetimepoolstats\",\"usageStats\":{\r\n    \"startTime\":\"2017-05-26T16:19:27.0644752Z\",\"lastUpdateTime\":\"2017-07-20T19:00:00Z\",\"dedicatedCoreTime\":\"PT4H50M26.903S\"\r\n  },\"resourceStats\":{\r\n    \"startTime\":\"2017-05-26T16:19:27.0644752Z\",\"diskReadIOps\":\"226\",\"diskWriteIOps\":\"57238\",\"lastUpdateTime\":\"2017-07-20T19:00:00Z\",\"avgCPUPercentage\":1.4050073280151554,\"avgMemoryGiB\":0.5743197621274504,\"peakMemoryGiB\":1.0807723999023437,\"avgDiskGiB\":0.026134560419552685,\"peakDiskGiB\":0.060092926025390625,\"diskReadGiB\":0.0036163330078125,\"diskWriteGiB\":6.4845428466796875,\"networkReadGiB\":0.032594382762908936,\"networkWriteGiB\":0.024887630715966225\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '985e3c81-b44d-4d89-ba4c-7b6cde002ce7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 20 Jul 2017 20:06:19 GMT',
  connection: 'close' });
 return result; }]];
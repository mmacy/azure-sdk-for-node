/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The list results of the ServiceFabric runtime versions.
 *
 */
class ClusterCodeVersionsListResult {
  /**
   * Create a ClusterCodeVersionsListResult.
   * @member {array} [value]
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ClusterCodeVersionsListResult
   *
   * @returns {object} metadata of ClusterCodeVersionsListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ClusterCodeVersionsListResult',
      type: {
        name: 'Composite',
        className: 'ClusterCodeVersionsListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ClusterCodeVersionsResultElementType',
                  type: {
                    name: 'Composite',
                    className: 'ClusterCodeVersionsResult'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ClusterCodeVersionsListResult;
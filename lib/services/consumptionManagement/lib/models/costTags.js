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
 * A cost tag resource.
 *
 * @extends models['ProxyResource']
 */
class CostTags extends models['ProxyResource'] {
  /**
   * Create a CostTags.
   * @member {array} [costTags] Cost tags.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CostTags
   *
   * @returns {object} metadata of CostTags
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CostTags',
      type: {
        name: 'Composite',
        className: 'CostTags',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          eTag: {
            required: false,
            serializedName: 'eTag',
            type: {
              name: 'String'
            }
          },
          costTags: {
            required: false,
            serializedName: 'properties.costTags',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CostTagElementType',
                  type: {
                    name: 'Composite',
                    className: 'CostTag'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CostTags;
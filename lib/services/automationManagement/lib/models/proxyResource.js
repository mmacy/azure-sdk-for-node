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
 * The resource model definition for a ARM proxy resource. It will have
 * everything other than required location and tags
 *
 * @extends models['Resource']
 */
class ProxyResource extends models['Resource'] {
  /**
   * Create a ProxyResource.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ProxyResource
   *
   * @returns {object} metadata of ProxyResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProxyResource',
      type: {
        name: 'Composite',
        className: 'ProxyResource',
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
          }
        }
      }
    };
  }
}

module.exports = ProxyResource;
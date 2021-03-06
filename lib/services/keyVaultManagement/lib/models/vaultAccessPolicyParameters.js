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
 * Parameters for updating the access policy in a vault
 *
 * @extends models['BaseResource']
 */
class VaultAccessPolicyParameters extends models['BaseResource'] {
  /**
   * Create a VaultAccessPolicyParameters.
   * @member {string} [id] The resource id of the access policy.
   * @member {string} [name] The resource name of the access policy.
   * @member {string} [type] The resource name of the access policy.
   * @member {string} [location] The resource type of the the access policy.
   * @member {object} properties Properties of the access policy
   * @member {array} [properties.accessPolicies] An array of 0 to 16 identities
   * that have access to the key vault. All identities in the array must use
   * the same tenant ID as the key vault's tenant ID.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VaultAccessPolicyParameters
   *
   * @returns {object} metadata of VaultAccessPolicyParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VaultAccessPolicyParameters',
      type: {
        name: 'Composite',
        className: 'VaultAccessPolicyParameters',
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
          location: {
            required: false,
            readOnly: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: true,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'VaultAccessPolicyProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = VaultAccessPolicyParameters;

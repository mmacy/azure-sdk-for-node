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

/**
 * Describes the properties of a Compute Operation value.
 *
 */
class ComputeOperationValue {
  /**
   * Create a ComputeOperationValue.
   * @member {string} [origin] The origin of the compute operation.
   * @member {string} [name] The name of the compute operation.
   * @member {string} [operation] The display name of the compute operation.
   * @member {string} [resource] The display name of the resource the operation
   * applies to.
   * @member {string} [description] The description of the operation.
   * @member {string} [provider] The resource provider for the operation.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ComputeOperationValue
   *
   * @returns {object} metadata of ComputeOperationValue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComputeOperationValue',
      type: {
        name: 'Composite',
        className: 'ComputeOperationValue',
        modelProperties: {
          origin: {
            required: false,
            readOnly: true,
            serializedName: 'origin',
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
          operation: {
            required: false,
            readOnly: true,
            serializedName: 'display.operation',
            type: {
              name: 'String'
            }
          },
          resource: {
            required: false,
            readOnly: true,
            serializedName: 'display.resource',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'display.description',
            type: {
              name: 'String'
            }
          },
          provider: {
            required: false,
            readOnly: true,
            serializedName: 'display.provider',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ComputeOperationValue;
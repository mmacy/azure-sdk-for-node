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
 * Capacity of the sku.
 *
 */
class SkuCapacity {
  /**
   * Create a SkuCapacity.
   * @member {string} [usable] Usable capacity in TB.
   * @member {string} [maximum] Maximum capacity in TB.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SkuCapacity
   *
   * @returns {object} metadata of SkuCapacity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SkuCapacity',
      type: {
        name: 'Composite',
        className: 'SkuCapacity',
        modelProperties: {
          usable: {
            required: false,
            readOnly: true,
            serializedName: 'usable',
            type: {
              name: 'String'
            }
          },
          maximum: {
            required: false,
            readOnly: true,
            serializedName: 'maximum',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SkuCapacity;
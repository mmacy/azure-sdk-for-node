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
 * Address details.
 *
 */
class Address {
  /**
   * Create a Address.
   * @member {string} [text] Detected Address.
   * @member {number} [index] Index(Location) of the Address in the input text
   * content.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Address
   *
   * @returns {object} metadata of Address
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Address',
      type: {
        name: 'Composite',
        className: 'Address',
        modelProperties: {
          text: {
            required: false,
            serializedName: 'Text',
            type: {
              name: 'String'
            }
          },
          index: {
            required: false,
            serializedName: 'Index',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Address;
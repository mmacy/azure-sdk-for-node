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
 * Output for the GetCopyLogsUri.
 *
 */
class GetCopyLogsUriOutput {
  /**
   * Create a GetCopyLogsUriOutput.
   * @member {string} [logType] Type/Level of the log.
   * @member {array} [copyLogDetails] List of copy log details.
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetCopyLogsUriOutput
   *
   * @returns {object} metadata of GetCopyLogsUriOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetCopyLogsUriOutput',
      type: {
        name: 'Composite',
        className: 'GetCopyLogsUriOutput',
        modelProperties: {
          logType: {
            required: false,
            serializedName: 'logType',
            type: {
              name: 'String'
            }
          },
          copyLogDetails: {
            required: false,
            serializedName: 'copyLogDetails',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CopyLogDetailsElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'copyLogDetailsType',
                      clientName: 'copyLogDetailsType'
                    },
                    uberParent: 'CopyLogDetails',
                    className: 'CopyLogDetails'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetCopyLogsUriOutput;
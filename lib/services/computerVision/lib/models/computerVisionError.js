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
 * Class representing a ComputerVisionError.
 */
class ComputerVisionError {
  /**
   * Create a ComputerVisionError.
   * @member {string} code The error code. Possible values include:
   * 'InvalidImageUrl', 'InvalidImageFormat', 'InvalidImageSize',
   * 'NotSupportedVisualFeature', 'NotSupportedImage', 'InvalidDetails',
   * 'NotSupportedLanguage', 'BadArgument', 'FailedToProcess', 'Timeout',
   * 'InternalServerError', 'Unspecified', 'StorageException'
   * @member {string} message A message explaining the error reported by the
   * service.
   * @member {string} [requestId] A unique request identifier.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ComputerVisionError
   *
   * @returns {object} metadata of ComputerVisionError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComputerVisionError',
      type: {
        name: 'Composite',
        className: 'ComputerVisionError',
        modelProperties: {
          code: {
            required: true,
            serializedName: 'code',
            type: {
              name: 'Enum',
              allowedValues: [ 'InvalidImageUrl', 'InvalidImageFormat', 'InvalidImageSize', 'NotSupportedVisualFeature', 'NotSupportedImage', 'InvalidDetails', 'NotSupportedLanguage', 'BadArgument', 'FailedToProcess', 'Timeout', 'InternalServerError', 'Unspecified', 'StorageException' ]
            }
          },
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          requestId: {
            required: false,
            serializedName: 'requestId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ComputerVisionError;

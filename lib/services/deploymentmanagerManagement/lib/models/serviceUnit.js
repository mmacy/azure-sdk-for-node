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
 * Defines a service unit.
 *
 * @extends models['ServiceUnitProperties']
 */
class ServiceUnit extends models['ServiceUnitProperties'] {
  /**
   * Create a ServiceUnit.
   * @member {string} [name] Name of the service unit.
   * @member {array} [steps] Detailed step information, if present.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ServiceUnit
   *
   * @returns {object} metadata of ServiceUnit
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceUnit',
      type: {
        name: 'Composite',
        className: 'ServiceUnit',
        modelProperties: {
          targetResourceGroup: {
            required: true,
            serializedName: 'targetResourceGroup',
            type: {
              name: 'String'
            }
          },
          deploymentMode: {
            required: true,
            serializedName: 'deploymentMode',
            type: {
              name: 'Enum',
              allowedValues: [ 'Incremental', 'Complete' ]
            }
          },
          artifacts: {
            required: false,
            serializedName: 'artifacts',
            type: {
              name: 'Composite',
              className: 'ServiceUnitArtifacts'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          steps: {
            required: false,
            serializedName: 'steps',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RolloutStepElementType',
                  type: {
                    name: 'Composite',
                    className: 'RolloutStep'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceUnit;

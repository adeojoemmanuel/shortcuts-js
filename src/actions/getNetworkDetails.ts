import { withActionOutput } from '../utils';

import WFCellularDetail from '../interfaces/WF/WFCellularDetail';
import WFNetworkDetailsNetwork from '../interfaces/WF/WFNetworkDetailsNetwork';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWiFiDetail from '../interfaces/WF/WFWiFiDetail';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Network Details
 * @section Actions > Scripting > Device
 * @icon Wi-Fi
 *
 * Gets information about the currently connected networks.
 *
 * ```js
 * getNetworkDetails({
 *   network: 'Wi-Fi',
 *   get: 'Network Name',
 * });
 *
 * getNetworkDetails({
 *   network: 'Cellular',
 *   get: 'Carrier Name',
 * });
 * ```
 */

const getNetworkDetails = (
  {
    network = 'Wi-Fi',
    attribute = 'Network Name',
  }: {
    /** The type of network to look at */
    network?: WFNetworkDetailsNetwork,
    /** The particular network detail to retrieve */
    attribute?: WFSerialization | WFWiFiDetail | WFCellularDetail,
  },
): WFWorkflowAction => {
  let detailKey = 'WFWiFiDetail';
  if (network === 'Cellular') {
    detailKey = 'WFCellularDetail';
  }

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.getwifi',
    WFWorkflowActionParameters: {
      WFNetworkDetailsNetwork: network,
      [detailKey]: attribute,
    },
  };
};

export default withActionOutput(getNetworkDetails);

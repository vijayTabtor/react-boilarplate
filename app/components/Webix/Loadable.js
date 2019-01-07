/**
 *
 * Asynchronously loads the component for Webix
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));

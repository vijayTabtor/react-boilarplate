/**
 *
 * Asynchronously loads the component for Cop
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));

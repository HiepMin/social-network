import React, { Suspense, lazy } from 'react';
import LoadingIndicator from './../LoadingIndicator';
const Avatar = lazy(() => import('./component'));
export default props => (
  <Suspense fallback={<LoadingIndicator middle/>}>
    <Avatar {...props} />
  </Suspense>
)


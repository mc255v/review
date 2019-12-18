import React, { useState, Suspense } from 'react';
import Page1 from './components/Page1';
import './App.css';
// HOC component splitting
// import AsyncComponent from './components/AsyncComponent';
// React.lazy
const Page2Lazy = React.lazy(() => import('./components/Page2'))
const Page3Lazy = React.lazy(() => import('./components/Page3'))

const App = () => {
  const [route, setRoute] = useState('page1');

  const onRouteChange = (newRoute) => {
    setRoute(newRoute);
  }

  // HOC component
  // switch(route) {
  //   case 'page2':
  //     const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
  //     return <AsyncPage2 onRouteChange={onRouteChange} />
  //   case 'page3':
  //     const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
  //     return <AsyncPage3 onRouteChange={onRouteChange} />
  //   default:
  //     return <Page1 onRouteChange={onRouteChange} />
  // }

  // React.lazy
  switch(route) {
    case 'page2':
      return (
        <Suspense fallback={<div>Loading...</div>} >
          <Page2Lazy onRouteChange={onRouteChange} />
        </Suspense>
      );
    case 'page3':
      return (
        <Suspense fallback={<div>Loading...</div>} >
          <Page3Lazy onRouteChange={onRouteChange} />
        </Suspense>
      );
    default:
      return <Page1 onRouteChange={onRouteChange} />
  }
}

export default App;

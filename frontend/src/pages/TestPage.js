import React from 'react';
import Test from '../components/Test';
import Breadcrum from '../components/Breadcrum';

const TestPage = () => {
  const type = 'simulacro oposición';

  return (
    <div>
      <Breadcrum parent={'Agentes de hacienda pública'} child={'Test: simulacro oposición'}/>
      <h1 className="main-title main-title--BC">Test: {type}</h1>

      <section>
        <div className="line"></div>
        <h2 className="section-title">Descripción</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>

      <section>
        <div className="line"></div>
        <h2 className="section-title">Test</h2>
        <Test/>
      </section>
    </div>
  );
};

export default TestPage;
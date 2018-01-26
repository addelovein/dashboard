import React from 'react';
import NextDeparture from './../NextDeparture';
import Layout from './../Layout';
import Panel from './../Panel';
import Marquee from './../Marquee';

const Platform = ({ width, height, data, top }) => {
  if (!data) {
    return null;
  }

  const next = data[0];
  const rest = data.slice(1);

  const message = rest.map(
    ({ Line, Name, Value }) => `${Line} ${Name}  ${Value}`
  ).join('   ');

  return (
    <Layout>
      <Panel width={width} height={height} />
      <NextDeparture
        height={height}
        destination={next.Name}
        time={next.Value}
        line={next.Line}
      />
      <Marquee
        width={width}
        height={height}
      >
        {message}
      </Marquee>
    </Layout>
  );
};

export default Platform;

import React, { SFC } from 'react';

import Img from '../Img';
import loadingImg from './images/loading.gif';
import styles from './styles';

const App: SFC<{}> = () => (
  <div css={styles}>
    <Img
      src="https://picsum.photos/504"
      placeholder={loadingImg}
      // width="252"
      // height="252"
      alt="Some image"
    />
  </div>
);

export default App;

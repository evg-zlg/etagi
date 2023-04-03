import { Route, Routes } from 'react-router-dom';

import { APPRoute } from '../const/const';
import { Section } from '../../Pages/Section';

function RootRouter() {
  return (
    <Routes>
      <Route path={APPRoute.section} element={<Section />} />
    </Routes>
  );
}

export { RootRouter };

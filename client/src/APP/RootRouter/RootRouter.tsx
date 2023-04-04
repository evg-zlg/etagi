import { Route, Routes } from 'react-router-dom';

import { APPRoute } from '../../const/const';
import { Section } from '../../Pages/Section';
import { Flat } from '../../Pages/Flat';

function RootRouter() {
  return (
    <Routes>
      <Route path={APPRoute.section} element={<Section />} />
      <Route path={`${APPRoute.flat}:id`} element={<Flat />} />
    </Routes>
  );
}

export { RootRouter };

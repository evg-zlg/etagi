import { Route, Routes } from 'react-router-dom';

import { Flat } from '../../Pages/Flat';
import { Main } from '../../Pages/Main';

import { APPRoute } from '../../const/const';

function RootRouter() {
  return (
    <Routes>
      <Route path={APPRoute.section} element={<Main />} />
      <Route path={`${APPRoute.flat}:id`} element={<Flat />} />
    </Routes>
  );
}

export { RootRouter };

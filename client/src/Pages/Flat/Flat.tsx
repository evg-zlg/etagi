import { useParams } from 'react-router-dom';

import { useGetOneFlatQuery } from '../../store/API/section.api';

function Flat() {
  const params = useParams();
  const {
    isSuccess,
    isLoading,
    data: flat,
  } = useGetOneFlatQuery(params.id || '');

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isSuccess && flat.price}
    </div>
  );
}

export { Flat };

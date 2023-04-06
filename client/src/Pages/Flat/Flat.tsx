import { useParams } from 'react-router-dom';

import { useGetOneFlatQuery } from '../../store/API/section.api';
import { FlatDetails } from '../../components/FlatDetails';

import { Wrapper } from '../../styles/components/Wrapper';
import { Loader } from '../../components/Loader';

function Flat() {
  const params = useParams();
  const {
    isSuccess,
    isLoading,
    data: flat,
  } = useGetOneFlatQuery(params.id || '');

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {isSuccess && <FlatDetails flat={flat}/>}
    </Wrapper>
  );
}

export { Flat };

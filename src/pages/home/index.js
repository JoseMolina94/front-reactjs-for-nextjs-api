import React from 'react';
import { useGetSingers } from "../../hooks/useGetSingers";
import { SingersList } from "../../components/SingersList";

export const Home = () => {
  const {
    singers,
    loading
  } = useGetSingers()

  return (
    <div>
      <SingersList
        singers={singers}
        loading={loading}
      />
    </div>
  );
}

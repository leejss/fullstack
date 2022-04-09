import useSWR from "swr";

const usePlaylist = () => {
  const { data, error } = useSWR("/playlist");

  return {
    playlist: data,
    isLoading: !data && !error,
    error,
  };
};

export default usePlaylist;

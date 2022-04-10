import type { Playlist } from "@prisma/client";
import useSWR from "swr";

const usePlaylist = () => {
  const { data, error } = useSWR<Playlist[]>("/playlist");

  return {
    playlist: data,
    isLoading: !data && !error,
    error,
  };
};

export default usePlaylist;

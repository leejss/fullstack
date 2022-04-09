import useSWR from "swr";

const useMe = () => {
  const { data, error } = useSWR("/me");

  return {
    me: data,
    isLoading: !data && !error,
    error,
  };
};

export default useMe;

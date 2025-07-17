import { useQuery } from '@tanstack/react-query';


export const useSignIn = () => {
  const {} = useQuery({
    queryKey: ['sign-in'],
  });
};

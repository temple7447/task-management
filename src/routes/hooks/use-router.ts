import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export function useRouter() {
  const navigate = useNavigate();

  const router = useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      reload: () => window.location.reload(),
      push: (href:any, queryParams = {}) => {
        const queryString = new URLSearchParams(queryParams).toString();
        const fullUrl = queryString ? `${href}?${queryString}` : href;
        navigate(fullUrl);
      },
      replace: (href:any, queryParams = {}) => {
        const queryString = new URLSearchParams(queryParams).toString();
        const fullUrl = queryString ? `${href}?${queryString}` : href;
        navigate(fullUrl, { replace: true });
      },
    }),
    [navigate]
  );

  return router;
}

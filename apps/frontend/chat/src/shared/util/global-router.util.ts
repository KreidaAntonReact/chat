import type { NavigateFunction } from 'react-router';

interface IGlobalRouter {
    navigate: null | NavigateFunction
}

export const globalRouter: IGlobalRouter = {
  navigate: null,
};

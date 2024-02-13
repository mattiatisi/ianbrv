import { useMediaQuery } from "react-responsive";

export const useMediaQueries = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 992px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  return {
    isDesktopOrLaptop,
    isTabletOrMobile,
  };
};

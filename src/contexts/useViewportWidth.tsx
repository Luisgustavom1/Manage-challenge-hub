import React, { ReactNode } from "react";

interface ContextData {
  viewportWidth: number;
  setViewportWidth: (value: number) => void;
}

interface IUseVwProvider {
  children: ReactNode;
}

const UseVwContext = React.createContext<ContextData>({} as ContextData);

const getViewportWidth = () => {
  const { innerWidth: width } = window;

  return width;
};

export function UseVwProvider({ children }: IUseVwProvider) {
  const [viewportWidth, setViewportWidth] = React.useState(window.innerWidth);
  const value = React.useMemo(
    () => ({
      viewportWidth,
      setViewportWidth,
    }),
    [viewportWidth]
  );

  React.useEffect(() => {
    console.log(viewportWidth);
  }, [viewportWidth]);

  React.useEffect(() => {
    const setNewViewportwidth = () => {
      setViewportWidth(getViewportWidth());
    };

    window.addEventListener("resize", setNewViewportwidth);
    return () => window.removeEventListener("resize", setNewViewportwidth);
  }, []);
  return (
    <UseVwContext.Provider value={value}>{children}</UseVwContext.Provider>
  );
}

export const useViewportWidth = () => {
  const context = React.useContext(UseVwContext);

  if (!context) {
    throw new Error(`useViewportWidth must be used within a seVwProvider`);
  }

  return context;
};

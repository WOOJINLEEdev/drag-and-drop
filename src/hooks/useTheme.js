import { atom, useRecoilState } from "recoil";

const isBrowserDarkMode = localStorage.getItem("theme") === "dark";

const themeStatus = atom({
  key: "themeStatus",
  default: isBrowserDarkMode ? "dark" : "light",
});

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState(themeStatus);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    setMode(theme === "light" ? "dark" : "light");
  };

  return [theme, toggleTheme];
};

import React, {useEffect, useState, createContext, useContext} from "react";



const ThemeContext = createContext<any>({} as any);

//   interface props { 
//     initialTheme: JSX.Element | JSX.Element[],
//     children: JSX.Element | JSX.Element[],
// }


export default function ThemeContextProvider({children}: any){


const [theme, setTheme] = useState(localStorage.getItem("theme") !== "dark" ? "light" : "dark");



  useEffect(() => {

         const root = window.document.documentElement;

        const removeTheme = theme === "dark" ? "light" : "dark";        

         root.classList.add(theme);
         root.classList.remove(removeTheme);
         localStorage.setItem("theme", theme)
  }, [ theme ])

 return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    { children }
    </ThemeContext.Provider>
 )
}

export function useTheme(){
  return useContext(ThemeContext)
} 



// const getInitialTheme = () => {
//     if (typeof window !== 'undefined' && window.localStorage) {
//       const storedPrefs = window.localStorage.getItem('current-theme');
//       if (typeof storedPrefs === 'string') {
//         return storedPrefs;
//       }
//       if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         return 'dark';
//       }
//     }
//     return 'light';
//   };
  
//   export const ThemeContext = React.createContext<any>({} as any);


//   interface props { 
//     initialTheme: JSX.Element | JSX.Element[],
//     children: JSX.Element | JSX.Element[],
// }
  
//   export const ThemeProvider = ({ initialTheme, children }: props) => {
//     const [theme, setTheme] = React.useState(getInitialTheme);
  
//     const checkTheme = (existing: any) => {
//       const root = window.document.documentElement;
//       const isDark = existing === 'dark';
  
//       root.classList.remove(isDark ? 'light' : 'dark');
//       root.classList.add(existing);
  
//       localStorage.setItem('current-theme', existing);
//     };
  
//     if (initialTheme) {
//       checkTheme(initialTheme);
//     }
  
//     React.useEffect(() => {
//       checkTheme(theme);
//     }, [theme]);
  
//     return (
//       <ThemeContext.Provider value={{ theme, setTheme }}>
//         {children}
//       </ThemeContext.Provider>
//     );
//   };
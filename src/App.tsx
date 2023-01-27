import { changeTheme, useTheme } from '@nextui-org/react';
import {
  RouterProvider
} from "react-router-dom";
import router from './routes';


const App = () => {
  const { type, isDark } = useTheme();

  const handleChange = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
    changeTheme(nextTheme);
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App;

import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import App from '../App';
function Layout() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <>Error</>,
      children: [
        {
          element: <></>,
          errorElement: <>Error</>,
          index: true,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <>
        <Suspense fallback="loading">
          {/* <ControlContextProvider> */}
          <RouterProvider router={router}></RouterProvider>
          {/* </ControlContextProvider> */}
          <ToastContainer />
        </Suspense>
      </>
    </div>
  );
}

export default Layout;

import { lazy, Suspense } from 'react'
import { Outlet, Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from '../layouts/dashboard'

const IndexPage = lazy(() => import('../pages/app'))
const BranchPage = lazy(() => import('../pages/branch'))
const ProjectDetails = lazy(() => import('../pages/projectdetailbranch'))
const SettingPage = lazy(() => import('../pages/setting'))
const DetailsBranchPage = lazy(() => import('../pages/detailbranch'))
const DetailProjectPage = lazy(() => import('../pages/detailproject'))
const ProjectPage = lazy(() => import('../pages/project'))
const ProjectUserPage = lazy(() => import('../pages/projectuser'))
const LoginPage = lazy(() => import('../pages/login'))
const RecoverPassword = lazy(() => import('../pages/recoverpassword'))
const VerifyOtpPage = lazy(() => import('../pages/verifyotp'))
const NewPasswordPage = lazy(() => import('../pages/newpassword'))
const AnalyticsPage = lazy(() => import('../pages/analytis'))
const UserPage = lazy(() => import('../pages/user'))
const DetailUserPage = lazy(() => import('../pages/detailuser'))
const Page404 = lazy(() => import('../pages/page404'))

// ----------------------------------------------------------------------

export default function Router () {
  const isUserLoggedIn = false

  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to='/login' replace />
    },
    {
      path: 'login',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <LoginPage />
        </Suspense>
      )
    },
    {
      path: 'recoverpassword',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <RecoverPassword />
        </Suspense>
      )
    },
    {
      path: 'verifyotp',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <VerifyOtpPage />
        </Suspense>
      )
    },
    {
      path: 'newpassword',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <NewPasswordPage />
        </Suspense>
      )
    },
    {
      path: 'recovernewpassword',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <NewPasswordPage />
        </Suspense>
      )
    },
    {
      element:  (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      )  ,
      children:  [
            { path: 'dashboard', element: <IndexPage />, index: true },
            {
              path: 'branches',
              element: <Outlet />,

              children: [
                { index: true, element: <BranchPage /> },
                {
                  path: 'detailbranch', // Dynamic route for any branch name (e.g., branch/lagos)
                  element: (
                    <Suspense fallback={<div>Loadingvoe...</div>}>
                      <DetailsBranchPage />
                    </Suspense>
                  )
                },
                {
                  path: 'detailbranchproject', // Dynamic route for any branch name (e.g., branch/lagos)
                  element: (
                    <Suspense fallback={<div>Loadingvoe...</div>}>
                      <DetailProjectPage />
                    </Suspense>
                  )
                },
                {
                  path: 'detailprojectusers', // Dynamic route for any branch name (e.g., branch/lagos)
                  element: (
                    <Suspense fallback={<div>Loadingvoe...</div>}>
                      <ProjectUserPage />
                    </Suspense>
                  )
                }
              ]
            },
            {
              path: 'projects',
              element: <Outlet />,

              children: [
                { index: true, element: <ProjectPage /> },
                {
                  path: 'projectdetailbranch', // Dynamic route for any branch name (e.g., branch/lagos)
                  element: (
                    <Suspense fallback={<div>Loadingvoe...</div>}>
                      <ProjectDetails />
                    </Suspense>
                  )
                },
               
              ]
            },
            {
              path: 'users',
              element: <Outlet />,

              children: [
                { index: true, element: <UserPage /> },
                {
                  path: 'detailuser', // Dynamic route for any branch name (e.g., branch/lagos)
                  element: (
                    <Suspense fallback={<div>Loadingvoe...</div>}>
                      <DetailUserPage />
                    </Suspense>
                  )
                },
               
              ]
            },

            { path: 'analytics', element: <AnalyticsPage /> },
            { path: 'settings', element: <SettingPage /> }
          ]
        
    },
    {
      path: '404',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Page404 />
        </Suspense>
      )
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])

  
  return routes
}


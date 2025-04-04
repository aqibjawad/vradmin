import Dashboard from "../Views/dashboard/index"

import WelcomePage from "../Views/welcome"

import Signin from "../Views/Auth/SignIn"
import Signup from "../Views/Auth/SignUp"

import Category from "../Views/Category/category"
import SubCategory from "../Views/Category/subcategory"

// import Users from "../Views/staff/user"

import Profile from "../Views/profile"

import UpdatePassword from "../Views/password"

import Reviews from "../Views/reviews"

import Analytics from "../Views/analytics"

const routes =[  

    {path:'/', element:<WelcomePage />, exact:'true', type:'public' },
    
    {path:'/sign-up', element:<Signup />, exact:'true', type:'public' },
    {path:'/sign-in', element:<Signin />, exact:'true', type:'public' },


    {path:'/dashboard', element:<Dashboard />, exact:'true', type:'private' },

    {path:'/category', element:<Category />, exact:'true', type:'private' },
    {path:'/sub-category', element:<SubCategory />, exact:'true', type:'private' },


    {path:'/profile-settings', element:<Profile />, exact:'true', type:'private' },

    {path:'/privacy-settings', element:<UpdatePassword />, exact:'true', type:'private' },

    // {path:'/users', element:<Users />, exact:'true', type:'private' },

    {path:'/reviews', element:<Reviews />, exact:'true', type:'private' },

    {path:'/analytics', element:<Analytics />, exact:'true', type:'private' },

]

export default routes 
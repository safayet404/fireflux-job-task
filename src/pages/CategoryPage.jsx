import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Blog from '../components/Blog'
import Category from '../components/Category'

const CategoryPage = () => {
    return (
        <div className='text-center'>
            <NavBar />
            <Category/>
            <Footer />
        </div>
    )
}

export default CategoryPage

import React from 'react'
import AddBlogForm from '../Componenet/AddBlog/AddBlogForm'
import PageTitle from '../Componenet/PageTitle'
import { Helmet } from 'react-helmet-async'
export default function AddBlog() {
  return (
    <div>
         <Helmet>
              <title>Pathz - Share Your Journey</title>
            </Helmet>
          <PageTitle title={'✈️ Share Your Journey'} subTitle={'ake your readers on a journey through your words. Share your adventures, travel tips, hidden gems, and unforgettable experiences to inspire and guide fellow travelers around the globe!'}/>
      <AddBlogForm/>
    </div>
  )
}

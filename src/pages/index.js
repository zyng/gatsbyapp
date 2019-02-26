import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Content from "./MainContent/Content";
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
const homeContent = [
  {
    id: 1,
    title: 'Quisque viverra',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quasi, quaerat voluptates tempora sed animi? Possimus ad quisquam amet quia commodi non repudiandae? Nesciunt incidunt qui eius at ad? Dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequuntur distinctio nulla similique quis aliquid magnam, accusantium ut doloremque ipsa nisi quo mollitia cupiditate excepturi laboriosam? Facere distinctio id sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque est illum? Quos eos voluptates asperiores quo doloribus iure molestias reprehenderit molestiae maxime, harum a, veniam, accusantium animi corporis aliquam.',
    img: img1
  },
  {
    id: 2,
    title: 'Quisque viverra',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quasi, quaerat voluptates tempora sed animi? Possimus ad quisquam amet quia commodi non repudiandae? Nesciunt incidunt qui eius at ad? Dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequuntur distinctio nulla similique quis aliquid magnam, accusantium ut doloremque ipsa nisi quo mollitia cupiditate excepturi laboriosam? Facere distinctio id sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque est illum? Quos eos voluptates asperiores quo doloribus iure molestias reprehenderit molestiae maxime, harum a, veniam, accusantium animi corporis aliquam.',
    img: img2
  },
]


const IndexPage = () => {

  const content = homeContent.map(content => (
    <Content
      key={content.id}
      title={content.title}
      body={content.body}
      img={content.img}
      reverse={content.id % 2 === 0 ? true : false}
    />)
  )
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <section className="page-content">
        <div className="page-content__title">who we are</div>
        {content}
      </section>

    </Layout>
  )
}

export default IndexPage

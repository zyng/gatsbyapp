import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "./MainContent/Content";
import img1 from '../images/img5.jpg';
import img2 from '../images/img6.jpg';

const productsContent = [
    {
        id: 1,
        title: 'Product 1',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quasi, quaerat voluptates tempora sed animi? Possimus ad quisquam amet quia commodi non repudiandae? Nesciunt incidunt qui eius at ad? Dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequuntur distinctio nulla similique quis aliquid magnam, accusantium ut doloremque ipsa nisi quo mollitia cupiditate excepturi laboriosam? Facere distinctio id sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque est illum? Quos eos voluptates asperiores quo doloribus iure molestias reprehenderit molestiae maxime, harum a, veniam, accusantium animi corporis aliquam.',
        img: img1
    },
    {
        id: 2,
        title: 'Product 2',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quasi, quaerat voluptates tempora sed animi? Possimus ad quisquam amet quia commodi non repudiandae? Nesciunt incidunt qui eius at ad? Dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequuntur distinctio nulla similique quis aliquid magnam, accusantium ut doloremque ipsa nisi quo mollitia cupiditate excepturi laboriosam? Facere distinctio id sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque est illum? Quos eos voluptates asperiores quo doloribus iure molestias reprehenderit molestiae maxime, harum a, veniam, accusantium animi corporis aliquam.',
        img: img2
    },
]

const ProductsPage = () => {

    const content = productsContent.map(content => (
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
            <SEO title="Products Page" />
            <section className="page-content">
                <div className="page-content__title">our products</div>
                {content}
            </section>
        </Layout>
    )
}

export default ProductsPage

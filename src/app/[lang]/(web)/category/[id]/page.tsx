import CategoryContainer from "../components/CategoryContainer";
import React from "react";
const Category = () => {
    // console.log(posts)
    return (
        <CategoryContainer/>
    );
};
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const res = await fetch(`https://api-dev-loyalty-2.bilisoftware.com/api/customer/category/${}`)
    // const posts = await res.json()
   
    // // By returning { props: { posts } }, the Blog component
    // // will receive `posts` as a prop at build time
    // return {
    //   props: {
    //     posts,
    //   },
    // }
  }
export default Category;
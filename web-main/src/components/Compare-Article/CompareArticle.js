/**
 * A component shown in route /compare-car
 * 
 * 2022-04-16 Chayapol Moemeng
 * - Fetch WPGraphQL from articles.bhalogari.com only category="Car Comparison".
 */
import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import SectionTitle from "@components/SectionTitle";
import styled from "styled-components";
import ArticleCard from "@components/ArticleCard";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import parse from "html-react-parser";

function CompareArticle() {
  const [content, setContent] = useState([]);

  useEffect(async () => {
    const client = new ApolloClient({
      uri: "https://articles.bhalogari.com/graphql",
      cache: new InMemoryCache(),
    });

    await client
      .query({
        query: gql`
          query CarComparisonPosts {
            posts(first: 3,where: {categoryName: "Car Comparison" }) {
              edges {
                node {
                  id
                  link
                  date
                  title
                  categories(first: 101) {
                    nodes {
                      name
                    }
                  }
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  excerpt
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        // console.debug("Bhalogari WP GraphQL");
        // console.debug(result);
        const contents = result.data.posts.edges.map((edge) => {
          const post = edge.node;
          // console.debug(post);
          // console.debug(post.id, post.categories);
          return {
            id: post.id,
            tag: post.categories.nodes[0].name,
            tagLink: post.categories.nodes[0].link,
            image: post.featuredImage.node.sourceUrl,
            title: post.title,
            description: parse(post.excerpt),
            // button: lang == "bn" ? "আরও পড়ুন" : "Read More",  // TODO this file has not work with multi language yet
            button: "Read More",
            buttonLink: post.link,
          };
        });
        setContent(contents);
      });
  }, []);

  return (
    <CompareDiv>
      <Container maxWidth="lg">
        <SectionTitle title1="Comparison by" title2="Our Experts" />

        <CompareArticleDiv>
          {content.map((item, index) => (
            <ArticleCard
              key={index}
              styling="article-box"
              ArticleImage={item.image}
              link={item.tagLink}
              ArticleTitle={item.title}
              subTitle={item.description}
              button2={item.button}
              link2={item.buttonLink}
            />
          ))}
        </CompareArticleDiv>
      </Container>
    </CompareDiv>
  );
}

const CompareDiv = styled.div`
  margin-top: 56px;
  background-color: #efefef;
  padding-top: 55px;

  @media (max-width: 1024px) {
    margin-top: 25px;
  }

  @media (max-width: 767px) {
    margin-top: 20px;
    padding-top: 25px;
  }

  @media (max-width: 425px) {
    margin-top: 15px;
  }
`;

const CompareArticleDiv = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-left: -5px;
  margin-right: -5px;
  padding-bottom: 50px;
  .article-box {
    .taglink {
      display: none;
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 30px;
    flex-wrap: wrap;
    .article-box {
      max-width: 100%;
    }
  }
`;
export default CompareArticle;

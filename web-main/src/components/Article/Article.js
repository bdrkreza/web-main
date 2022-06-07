/**
 * Connect to articles.bhalogari.com WPGraphQL to get the latest articles.
 * TODO Howver, it risks the connection failure resulting in empty article sections.
 */
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import PlayIcon from "@assets/play1.svg";
import ArticleCard from "@components/ArticleCard";
import SectionTitle from "@components/SectionTitle";
import { Container } from "@material-ui/core";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";

function Article() {
  /*
  useSessionStorage() behaves strangely. 
  1. At some point, the languageVariables has been reset to {} causeing the entire app to crash.
  2. TODO Observe multiple places in the codebase that set session storage "languageVariables" by fetching from Api.
     This causes excessive redundant fetches.
     // const [lang, setLang] = useSessionStorage("lang", "en");
     // console.debug({ lang });
     // const [langVariables, setLangVariables] = useSessionStorage("langVariables", templateLanguageVariable);
     // console.debug({ langVariables });
     */

  const [content, setContent] = useState([]);

  const [lang, setLang] = useState("bn");
  // console.log(lang);
  const [langVariables, setLangVariables] = useState({});

  useEffect(() => {
    setLang(
      sessionStorage.getItem("lang") && sessionStorage.getItem("lang") != "null" ? sessionStorage.getItem("lang") : "en"
    );

    setLangVariables(JSON.parse(sessionStorage.getItem("langVariables")));
  }, []);

  useEffect(async () => {
    const client = new ApolloClient({
      uri: "https://articles.bhalogari.com/graphql",
      cache: new InMemoryCache(),
    });

    let queryString;

    if (lang == "en") {
      queryString = await client.query({
        query: gql`
          query LatestPosts {
            posts(first: 3, where: { tag: "english" }) {
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
      });
    } else {
      queryString = await client.query({
        query: gql`
          query LatestPosts {
            posts(first: 3, where: { tag: "bangali" }) {
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
      });
    }

    // console.debug("Bhalogari WP GraphQL");
    // console.debug(result);
    const contents = queryString.data.posts.edges.map((edge) => {
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
        button: lang == "bn" ? "আরও পড়ুন" : "Read More",
        buttonLink: post.link,
      };
    });
    setContent(contents);
  }, [lang, langVariables]);

  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1024
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const DesktopView = () => {
    // console.debug("DesktopView", langVariables);
    return (
      <Container maxWidth="lg">
        <ArticleTitle>
          <SectionTitle
            title1={
              langVariables && langVariables["featured_articles"] && langVariables["featured_articles"].lang_content
                ? lang == "bn"
                  ? langVariables["featured_articles"].lang_content.split(" ").slice(0, -1).join(" ")
                  : "Featured "
                : "Featured "
            }
            title2={
              langVariables && langVariables["featured_articles"]&& langVariables["featured_articles"].lang_content
                ? lang == "bn"
                  ? langVariables["featured_articles"].lang_content.split(" ").splice(-1)
                  : "Articles "
                : "Articles "
            }
          />
          <a href="http://articles.bhalogari.com/" target="_blank" rel="noreferrer">
            <img src={PlayIcon} alt="play" />
            {lang == "bn" ? "সবগুলো আর্টিকেল দেখুন" : "See all articles"}
          </a>
        </ArticleTitle>

        <ArticleDiv>
          {content.map((item, index) => (
            <ArticleCard
              key={index}
              styling="article-box"
              ArticleImage={item.image}
              tagButton={item.tag}
              link={item.tagLink}
              ArticleTitle={item.title}
              subTitle={item.description}
              button2={item.button}
              link2={item.buttonLink}
            />
          ))}
        </ArticleDiv>
      </Container>
    );
  };

  const MobileView = () => {
    return (
      <Container maxWidth="lg">
        <ArticleTitle>
          <SectionTitle title1="Featured " title2="Articles" />
          <a href="http://articles.bhalogari.com/" target="_blank" rel="noreferrer">
            <img src={PlayIcon} alt="play" />
            See all articles
          </a>
        </ArticleTitle>

        <ArticleDiv>
          <Swiper
            navigation={false}
            speed={100}
            freeMode={false}
            freeModeFluid={true}
            // className="swiperClass"
            breakpoints={{
              200: {
                slidesPerView: 1.25,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 10,
                slidesPerGroup: 2,
              },
            }}
          >
            {content.map((item, index) => (
              <SwiperSlide key={index}>
                <ArticleCard
                  styling="article-box"
                  ArticleImage={item.image}
                  tagButton={item.tag}
                  link={item.tagLink}
                  ArticleTitle={item.title}
                  subTitle={item.description}
                  button2={item.button}
                  link2={item.buttonLink}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ArticleDiv>
      </Container>
    );
  };

  try {
    return mobileView ? MobileView() : DesktopView();
  } catch (err) {
    console.error(err);
    return "Loading";
  }
}
const ArticleDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-left: -5px;
  margin-right: -5px;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    .article-box {
      max-width: 100%;
    }
  }
`;
const ArticleTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    line-height: 22px;
    color: #707070;
    font-weight: 400;
    text-decoration: none;
    img {
      margin-right: 7px;
    }
    &:hover {
      color: #f06425;
    }
    @media (max-width: 767px) {
      padding-bottom: 8px;
    }
  }
`;
export default Article;

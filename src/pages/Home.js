import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NSSHomepageFirstHalf from '../components/NSSHomepageFirstHalf'
import CardGrid from '../components/CardGrid'
import NoticeBanner from '../components/NoticeBanner'
import AboutUsHomePage from '../components/AboutUsHomePage'

const cards = [
  { title: 'Cloth Donation', content: 'Every year during winters, National Service Scheme, NIT Jamshedpur organises cloth donation for the needy. On 8th March, 2019 a cloth donation event was organised by NSS in association with the Rotary Club, Jamshedpur.Students and Staffs participated in large numbers and donated their old clothes which was then distributed to the needy people with the help of Rotary Club and NSS volunteers. More than 100 people of different age groups were benefitted with this event.' },
  { title: 'Tree Plantation', content: 'National Service Scheme, NIT Jamshedpur organises tree plantation drive regularly in the campus with a motto of green campus. We have planted more than thousands of plants around the campus. We not only plant saplings but also ensure that they get proper nourishment.' },
  { title: 'Blood Donation', content: 'National Service Scheme, NIT Jamshedpur organises Blood Donation Camp in assosiation with the Red Cross Society for the well being of the society. We understand the importance of blood for the ones who are in trouble. This allows the people in campus to contribute their bit to the society by saving someones life.' },
  // ... add more cards
];

const Home = () => {
  return (
    <>
    <Header />
    <NSSHomepageFirstHalf />
    {/* <NoticeBanner text="Important Notice: There will be a maintenance activity on August 20th." /> */}
    <CardGrid cards={cards} />
    <AboutUsHomePage />
    
    {/* <Carousel />
    <Aboutus />
    <Impacts />
    <Initiatives />
    */}
    <Footer /> 
    </>
  )
}

export default Home;
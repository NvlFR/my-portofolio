import React from 'react';
import { Flex } from '@mantine/core';
import '@mantine/core/styles.css'
import WelcomeHeader from '../components/welcome/Header'
import WelcomeHero from '../components/welcome/Hero';
import WelcomeFooter from '../components/welcome/Footer';

const MyPortfolio = () => {
  return (
    <Flex direction="column" mih="100vh" bg="linear-gradient(to bottom, #ffffffff, #DDDDDD)">
      <WelcomeHeader />
      <WelcomeHero />
      <WelcomeFooter />

    </Flex>
  );
};

export default MyPortfolio;
import React from 'react';

import { SEO, Layout, Container, Flex, GridContainer, GridItem } from '../components';

export default () => (
  <Layout>
    <SEO />
    <Container>
      <Flex className="flex-container">
        <Flex small="50%" tablet="60%">
          <h1>index page</h1>
        </Flex>
        <Flex small="50%" tablet="100%">
          <h1>index page</h1>
        </Flex>
      </Flex>
      <GridContainer small="auto / 1fr 1fr, 30px">
        <Flex className="flex-container">
          <Flex className="flex-container" small="50%">
            <p className="shrink">flex double nested</p>
            <Flex className="flex-container grow">
              <Flex>fl</Flex>
              <Flex>fl</Flex>
            </Flex>
          </Flex>
          <Flex className="flex-container" small="50%">
            <p>flex double nested</p>
          </Flex>
        </Flex>
        <GridItem>GRID ITEM</GridItem>
      </GridContainer>
    </Container>
  </Layout>
);

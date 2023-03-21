import React from 'react';
import { Feature, OptinForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
  return(
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>

          <OptinForm>
            <OptinForm.Input placeholder="Email address" />
            <OptinForm.Button>Try it now</OptinForm.Button>
            <OptinForm.Break />
            <OptinForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptinForm.Text>
          </OptinForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </> 
  );
}
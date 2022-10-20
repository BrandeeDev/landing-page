import React, {Fragment} from 'react';
import './App.css';
import Main from './UI/Main';
import Section from "./UI/Section";
import Header from "./components/Header";
import Title from "./components/Presentation/Title";
import Introduction from "./components/Presentation/Introduction";
import GetStarted from "./components/Presentation/GetStarted";
import Picture from "./components/Presentation/Picture";
import CategoriesBox from "./components/Category/CategoriesBox";
import Footer from "./components/Footer";
import Presentation from "./components/Presentation/Presentation";

function App() {
  return (
      <Fragment>

          <Main>
              <Header />
              <Section>


                  <Presentation />
                  <Picture />
                  <CategoriesBox />
              </Section>
              <Footer />

          </Main>


      </Fragment>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import PageNotFound from './pages/PageNotFound';
import Meeting from './pages/Meeting/meeting';
import VideoList from './components/Forms/VideoForm/VideoList'
import AddVideo from './components/Forms/VideoForm/AddVideo'
import Video from './components/Forms/VideoForm/Video'
import ArticleList from './components/Forms/ArticleForm/ArticleList'
import ArticleAdd from './components/Forms/ArticleForm/ArticleAdd'
import ArticleInfo from './components/Forms/ArticleForm/ArticleInfo'
import ArticleEdit from './components/Forms/ArticleForm/ArticleEdit'
import Profile from './components/Profile/Profile'


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Profile />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/articles">
            <ArticleList />
          </Route>
          <Route exact path="/articles/new">
            <ArticleAdd />
          </Route>
          <Route exact path="/articles/:_id">
            <ArticleInfo />
          </Route>
          <Route exact path="/articles/:_id/edit">
            <ArticleEdit />
          </Route>
          <Route exact path='/tutos'>
            <VideoList />
          </Route>
          <Route exact path='/add'>
            <AddVideo />
          </Route>
          <Route path="/tutos/:id">
            <Video />
          </Route>
          <Route exact path='/meeting'>
            <Meeting />
          </Route>
          <Route exact path='/blog'>
            <Blog />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

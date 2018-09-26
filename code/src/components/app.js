import React from "react"

class App extends React.Component {

  render() {
    return (<div className="wrapper">
      <div className="navbar">
        <div className="nav">
          <a href="#" id="home">Home</a>
          <a href="#">Technology</a>
          <a href="#" className="arrow-mobile"><i class="fas fa-angle-right"></i></a>
          <a href="#" className="hide-mobile">Creativity</a>
          <a href="#" className="hide-mobile">Entrepreneurship</a>
          <a href="#" className="hide-mobile">Self</a>
          <a href="#" className="hide-mobile">Culture</a>
          <a href="#" className="hide-mobile">Digital design</a>
          <a href="#" className="arrow-tablet"><i class="fas fa-angle-right"></i></a>
          <a href="#" className="hide-mobile hide-tablet">Popular on Medium</a>
          <a href="#" className="hide-mobile hide-tablet">Politics</a>
          <a href="#" className="hide-mobile hide-tablet">More</a>
          <a href="#" id="get-started-nav" class="button">Get started</a>
        </div>
      </div>
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Interesting ideas that set your mind in motion.
              </h1>
              <p>
                Hear directly from the people who know it best. From tech to politics to creativity and more – whatever your interest, we&apos;ve got you covered.
              </p>
            </div>
            <div className="hero-links">
              <a href="#" id="get-started" class="button">Get started</a>
              <a href="#" id="learn-more" class="button">Learn more</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="./images/medium-image.png" alt="Colourful illustration of people in a garden"/>
          </div>
        </div>
        <div className="article-container">
          <div className="article">
            <div className="article-image">
              <img src="./images/medium-image-puff-1.jpeg" alt="Photo of a playground"/>
            </div>
            <div className="article-text">
              <div className="article-text-main">
                <h2>The Boy Who Tamed the Sea</h2>
                <p>At 5:30 am, on any morning I can handle it, I&apos;ll slip out of the dark mouth of my covers and creep through the silver lig...</p>
              </div>
              <div className="article-text-byline">
                <div className="article-text-byline-image">
                  <img src="./images/writer-1.png" alt="Author avatar"/>
                </div>
                <div className="article-text-byline-signature">
                  <div className="article-text-byline-signature-name">
                    <p>Carl Moore</p>
                  </div>
                  <div className="article-text-byline-signature-info">
                    <div className="article-text-byline-signature-info-date">
                      <p>Oct 27</p>
                    </div>
                    <div className="article-text-byline-signature-info-read">
                      <p>8 min read</p>
                    </div>
                  </div>
                </div>
                <div className="article-text-byline-bookmark">
                  <img src="./images/bookmark.png" alt="Bookmark icon"/>
                </div>
              </div>
            </div>
          </div>
          <div className="article">
            <div className="article-image">
              <img src="./images/medium-image-puff-2.png" alt="Simplified illustration of a transportation system"/>
            </div>
            <div className="article-text">
              <div className="article-text-main">
                <h2>The Role of Human Emotions in the Future of Transport</h2>
                <p>Getting from A to B is about the feel very different</p>
              </div>
              <div className="article-text-byline">
                <div className="article-text-byline-image">
                  <img src="./images/writer-2.jpeg" alt="Author avatar"/>
                </div>
                <div className="article-text-byline-signature">
                  <div className="article-text-byline-signature-name">
                    <p>Ben Bland</p>
                  </div>
                  <div className="article-text-byline-signature-info">
                    <div className="article-text-byline-signature-info-date">
                      <p>Nov 1</p>
                    </div>
                    <div className="article-text-byline-signature-info-read">
                      <p>7 min read</p>
                    </div>
                  </div>
                </div>
                <div className="article-text-byline-bookmark">
                  <img src="./images/bookmark.png" alt="Bookmark icon"/>
                </div>
              </div>
            </div>
          </div>
          <div className="article">
            <div className="article-image">
              <img src="./images/medium-image-puff-4.jpeg" alt="Photo of a man with his back to the camera, facing a crowd"/>
            </div>
            <div className="article-text">
              <div className="article-text-main">
                <h2>The March of the Losers</h2>
                <p>Around the world, the victims are becoming the abusers, and Donald Trump is their king</p>
              </div>
              <div className="article-text-byline">
                <div className="article-text-byline-image">
                  <img src="./images/writer-3.jpeg" alt="Author avatar"/>
                </div>
                <div className="article-text-byline-signature">
                  <div className="article-text-byline-signature-name">
                    <p>Henry Wismayer</p>
                  </div>
                  <div className="article-text-byline-signature-info">
                    <div className="article-text-byline-signature-info-date">
                      <p>Nov 10</p>
                    </div>
                    <div className="article-text-byline-signature-info-read">
                      <p>8 min read</p>
                    </div>
                  </div>
                </div>
                <div className="article-text-byline-bookmark">
                  <img src="./images/bookmark.png" alt="Bookmark icon"/>
                </div>
              </div>
            </div>
          </div>
          <div className="article">
            <div className="article-image">
              <img src="./images/medium-image-puff-3.png" alt="Illustration of two people sitting in a café"/>
            </div>
            <div className="article-text">
              <div className="article-text-main">
                <h2>The Burning Season</h2>
                <p>You cannot save everything when the fires come to Northern California</p>
              </div>
              <div className="article-text-byline">
                <div className="article-text-byline-image">
                  <img src="./images/writer-4.jpeg" alt="Author avatar"/>
                </div>
                <div className="article-text-byline-signature">
                  <div className="article-text-byline-signature-name">
                    <p>Lindsey Smith</p>
                  </div>
                  <div className="article-text-byline-signature-info">
                    <div className="article-text-byline-signature-info-date">
                      <p>Nov 9</p>
                    </div>
                    <div className="article-text-byline-signature-info-read">
                      <p>31 min read</p>
                    </div>
                  </div>
                </div>
                <div className="article-text-byline-bookmark">
                  <img src="./images/bookmark.png" alt="Bookmark icon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }

}

export default App

import React from "react";
import "./About.css";
import MetaTags from 'react-meta-tags';

export default function About() {
  return (
    <div className="About">
        <MetaTags>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </MetaTags>
        <div className="container">
            <div className="col-md-6">
              <h2>Meta - A sports matchmaking platform</h2>
              <div className="col">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula in lacus tempor elementum et non purus. Mauris malesuada ipsum eget bibendum hendrerit. Maecenas lobortis sem sed dapibus iaculis. Nam vel dapibus sapien. Nam a fringilla neque, vitae vulputate justo. Integer ultrices metus enim. Vivamus et consectetur velit. Pellentesque est dui, aliquet vel fermentum eget, aliquet sit amet nisl. Praesent dapibus orci ut sodales ornare. Vivamus et sagittis augue. Etiam pellentesque sit amet quam id mollis."
                </p>
              </div>
              <div className="col">
                <p>"Integer condimentum purus eget ante facilisis tristique. Pellentesque lacinia orci felis, at euismod nibh posuere sit amet. Nulla ut sem ac ligula consequat faucibus quis in augue. Suspendisse bibendum quis mi ac hendrerit. Nunc tristique tortor vitae massa suscipit, id lacinia eros gravida. Integer euismod faucibus neque, sed pellentesque tortor interdum id. Curabitur dignissim eleifend nunc et dapibus. Ut laoreet iaculis metus a auctor. Maecenas non arcu ligula. Mauris scelerisque ante a eros viverra, in efficitur ligula efficitur. Pellentesque tincidunt mollis tortor vitae suscipit. Duis elementum blandit justo varius facilisis. Praesent pulvinar, ipsum nec lobortis feugiat, enim mauris cursus lorem, vitae aliquam quam neque a augue. Aenean eget lacus dignissim, fringilla quam sit amet, pellentesque ex. Nam vel hendrerit felis."
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <br/>
              <img className="img-fluid" src="about.jpg" alt="About"/>
            </div> 
        </div>
        <br/>
        <br/>
    </div>
  );
}
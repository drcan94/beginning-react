import React, { useEffect } from "react";
import ChangeTheme from "../../components/ChangeTheme";
import MealsProvider from "../../providers/MealsProvider";
import MealsList from "../../components/MealsList";
import MealsCounter from "../../components/MealsCounter";
import Wallet from "../../components/Wallet";
import DateLocale from "../../components/DateLocale";
import cat from "../../assets/cat.jpg";
import { Image, VideoContainer, StyledReactPlayer } from "./styles";
import SimpleCalculator from "../../components/SimpleCalculator";
import ReverseTodos from "../../components/ReverseTodos";
import FeedbackForm from "../../components/FeedbackForm";
import CounterDisplay from "../../components/CounterDisplay";
import CounterChange from "../../components/CounterChange";
import { CounterProvider } from "../../providers/CounterProvider";
import { BaseButton, LoginButton } from "../../components/Button";

const data = [
  {
    id: 1,
    title: "Tiramisu",
    description: "A delicious dessert",
    image: "https://source.unsplash.com/random/200x200",
    price: 4.99,
  },
  {
    id: 2,
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image: "https://source.unsplash.com/random/200x200",
    price: 3.99,
  },
  {
    id: 3,
    title: "Chocolate Cake",
    description: "Unexplored flavour",
    image: "https://source.unsplash.com/random/200x200",
    price: 2.99,
  },
];

// map function to create a new array with the same length as
// the original array, but with different content
const arrangedData = data.map((item) => {
  return {
    id: item.id,
    content: `${item.title} - ${item.description}`,
    price: item.price,
  };
});

function Home() {
  const randomImageUrl = "https://source.unsplash.com/random/200x200";
  const vidUrl = "https://www.youtube.com/watch?v=KjY94sAKLlw";

  return (
    <React.Fragment>
      <LoginButton
        // Render the LoginButton component with a type of "secondary" and an
        // onClick prop that alerts "Login Button is clicked"
        type="secondary"
        onClick={() => {
          alert("Login Button is clicked");
          // !!! But, this onClick doesn't work because it's overridden in LoginButton
        }}
      >
        Login
      </LoginButton>

      <BaseButton
        type="primary"
        onClick={() => {
          alert("Sign Up Button is clicked");
        }}
      >
        Sign Up
      </BaseButton>
      <DateLocale />

      <ChangeTheme />
      <MealsProvider>
        <MealsList />
        <MealsCounter />
      </MealsProvider>

      {/* using import  */}
      <Image src={cat} alt="Cat" />
      {/* or using require  */}
      <Image src={require("../../assets/cat.jpg")} alt="Cat" />
      {/* or using absolute path with public folder */}
      <Image src={"/assets/public_cat.jpg"} alt="Cat" />
      {/* or using random image */}
      <Image src={randomImageUrl} alt="Cat" />

      <Wallet />

      {/* <VideoContainer>
        <StyledReactPlayer
          url={vidUrl}
          playing={false}
          volume={0.5}
          controls={true}
          width="100%"
        />
      </VideoContainer> */}
      <SimpleCalculator />
      <table style={{ width: "fit-content" }} border="1px">
        <thead>
          <tr>
            <th style={{ padding: 6 }}>Content</th>
            <th style={{ padding: 6 }}>Price</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {arrangedData.map((desert) => {
            return (
              <tr key={desert.id}>
                <td style={{ padding: 6 }}>{desert.content}</td>
                <td style={{ padding: 6 }}>{desert.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ReverseTodos />
      <FeedbackForm />
      <CounterProvider>
        <CounterDisplay />
        <CounterChange />
      </CounterProvider>
    </React.Fragment>
  );
}

export default Home;

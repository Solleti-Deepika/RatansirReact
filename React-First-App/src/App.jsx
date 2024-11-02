import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Discount from "./Discount";
import Ex1 from "./Ex1";
import Ex2 from "./Ex2";
import Ex3 from "./Ex3";
import Ex4 from "./ex4";

   
import CourseGoal from "./CourseGoal";
import MovieCard from "./movieCard";
import BrightText from "./BrightText";
 function App()
 {
  return(
    <>
     /* <h1> this is React main page</h1>
     <Aboutus/>
     <Contactus/>
     <Ex1/>
     <Ex2/>
     <Ex3/>
     <Ex4/>
     <Discount/> */

      <CourseGoal title ="LearnReact" description ="In-depth"/>
      <CourseGoal title ="About Ratan sir" description ="Ratan sir nice"/> 
      <MovieCard movie="rebel"/>
      <MovieCard movie="Darling"/>
      <MovieCard movie="salar"/>
      <MovieCard movie="mr.perfect"/>

      <BrightText color ={"red"}/>
      <BrightText color ={"green"}/>
      <BrightText color ={"blue"}/>
     
     </>
   )
 }
 export default App;



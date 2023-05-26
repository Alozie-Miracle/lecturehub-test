import { useLocation } from "react-router";
import NavbarTop from "../components/NavbarTop/NavbarTop";
import Sidebar from "../components/Sidebar";
import NavbarBottom from "../components/NavbarBottom/NavbarBottom";
import Footer from "../components/Footer";
import { useState } from "react";
import CourseDetails from "../components/CourseDetails";
import InstructorDetail from "../components/InstructorDetail";


const Course = ({user, active, setActive}) => {
  const [route, setRoute] = useState();
  const params = useLocation().search.slice(1).split('%');

  const img = params[0];
  const Pronoun = params[1]
  const Instructor = params[2].slice(2);
  const Students = params[3]
  const Price = params[4]
  const rating = params[5]
  const CourseName = params[6]
  const CourseName2 = params[7]
  const InstructorProfile = params[8]

  const instructorName = Pronoun + ' ' + Instructor;


  const couserDescription = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sapiente cumque quisquam! Numquam explicabo doloribus quae quis sint adipisci recusandae tenetur alias asperiores labore, harum dolorem eligendi architecto id quasi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sapiente cumque quisquam! Numquam explicabo doloribus quae quis sint adipisci recusandae tenetur alias asperiores labore, harum dolorem eligendi architecto id quasi.'

  return (
    <div>
      <NavbarTop active={active} setActive={setActive} user={user}/>
      {active && (
        <Sidebar location={route} user={user} />
      )}
      <NavbarBottom />
      <CourseDetails 
        img={img}
        instructorName = {instructorName}
        Students = {Students}
        Price = {Price}
        rating={rating}
        CourseTitle = {CourseName + " " + CourseName2?.slice(2)}
        couserDescription = {couserDescription}
      />
      <InstructorDetail 
        instructorName = {instructorName}
        img={InstructorProfile}
        Students = {Students}
      />
      <Footer />
    </div>
  )
}

export default Course

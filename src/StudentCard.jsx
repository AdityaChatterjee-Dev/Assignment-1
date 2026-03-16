import  aditya from "./assets/prof_img.jpeg";

function StudentCard({ name, age, course, photo }) {
  return (
    <>
    
    <div style={{ border: "1px solid black", padding: "10px", backgroundColor: "darkblue", color: "white", display: "flex", alignItems: "center" ,marginBottom: "20px"}}>
        <img 
          src={aditya} 
          alt="Student" 
          style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "15px" }} 
        />
        <div>
          <h3>Name: {name}</h3>
          <p>Age: {age}</p>
          <p>Course: {course}</p>
        </div>
     </div>
    <div style={{ border: "1px solid black", padding: "10px", backgroundColor: "pink" ,marginBottom: "20px"}}>
        <center><h2>Registrations</h2></center>
      </div>
     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px" , marginBottom: "30px"}}>
      <div style={{ border: "1px solid black", padding: "10px", backgroundColor: "darkblue" ,color: "white"}}>
        <h3>Name: {name}</h3>
          <p>Age: {age}</p>
          <p>Course: {course}</p>
      </div>
      <div style={{ border: "1px solid black", padding: "10px", backgroundColor: "lightblue" }}>
        <h3>My Marks</h3>
        <h2>Assignment/Exam</h2>
      </div>
      <div style={{ border: "1px solid black", padding: "10px", backgroundColor: "violet"}}>
        <h3>Fee</h3>
      </div>
      <div style={{ border: "1px solid black", padding: "10px", backgroundColor: "red"}}>
        <h3>Library</h3>
        <h2>Circulation/Bookmark</h2>
      </div>
    </div>
    <div style={{ border: "1px solid black", padding: "10px", backgroundColor: ""}}>
        <div style={{ border: "1px solid black", padding: "10px", backgroundColor: "darkblue", color: "white"}}>
        <h3>Info at a glance</h3>
      </div>
      <div style={{ border: "1px solid black", padding: "10px", backgroundColor: ""}}>
        <h2>My Attendence:                    85%</h2>
        <h2>Total Lectures:                   189</h2>
        <h2>Total Present:                    159</h2>
        <h2>Total Absent:                     30</h2>
        <h2>Fines:                     0.0</h2>
      </div>
      </div>
  </>
  );
}

export default StudentCard;

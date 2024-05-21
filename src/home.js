import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = ()  => {
  const usenavigate = useNavigate();
  useEffect (() => {
    let username = sessionStorage.getItem('username');
if(username === null  || username === ''){
  usenavigate('/login');
}
},[]);


  useEffect (() => {

  },[]);

  return ( 
    <div>
      <div className="header">
        <Link to={'/'}>Home</Link>
        <Link to={"/login"}>Odjava</Link>

      </div>
        <h1 className="text-center">Home</h1>
    </div>
  );

}
export default Home ;
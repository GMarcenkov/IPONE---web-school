import ProfileInfo from "./components/profileInfo/ProfileInfo";
import React from "react";
import SchoolYearsList from "./components/schoolYears/schoolYearsList";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Profile from './components/ProfileContainer.module.css'

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        user:{},
        years:[
            {yearFrom:2019,yearTo:2020},
            {yearFrom:2019,yearTo:2020},
            {yearFrom:2019,yearTo:2020},
            {yearFrom:2019,yearTo:2020},
            {yearFrom:2019,yearTo:2020},
            {yearFrom:2019,yearTo:2020},
            {yearFrom:2019,yearTo:2020},
            {yearFrom:2019,yearTo:2020},
            {yearFrom:2019,yearTo:2020},
            {yearFrom:2019,yearTo:2020},
            {yearFrom:2019,yearTo:2020},
            {yearFrom:2019,yearTo:2020},
        ]

    };
  }

  componentDidMount() {
      this.handleGetUser()
  }
  handleGetUser=()=>{
      let user = jwt_decode(localStorage.getItem("jwt"));

          axios
              .get(`http://localhost:5000/users/${user.id}`)
              .then(response => {
                  console.log("ss", response);
                  this.setState({
                      user: response.data
                  });
              })
              .catch(function(error) {
                  console.log(error);
              });

  }
    render() {
      const {user,years}=this.state;
    return (
      <div className={Profile.profileContainer_holder}>
        <ProfileInfo user={user}/>
        <SchoolYearsList years={years}/>
      </div>
    );
  }
}

ProfileContainer.propTypes = {};

export default ProfileContainer;

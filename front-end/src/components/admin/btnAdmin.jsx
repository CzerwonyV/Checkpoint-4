import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './admin.css'; 

let BtnAdminContent = { display: "block" };

class BtnAdmin extends React.Component{ 
    withBlock = (Component) => {
        const { token } = this.props;
        const RedirectToBlock = () => { BtnAdminContent = { display: "none" };};
        return (token != null ? Component : RedirectToBlock);
      };
    
    render() {
        const { token } = this.props;
        if (token != null ) {
            return (
                <div style={BtnAdminContent} className="BtnSettingContent" >
                    <Link to="/dashboardadmin" className="BtnSetting">
                        <img src="https://user-images.githubusercontent.com/57908921/88267180-c34ba580-ccd0-11ea-8fbd-4a9a8ab56e07.png" alt="Setting" width="70%" />
                    </Link>
                </div>
            );
        } else {
            return (
                <div />
            )
        }
    }
}

const mapStateToProps = (state) => ({
    token: state.reducer.token,
  });

export default connect(mapStateToProps)(BtnAdmin);

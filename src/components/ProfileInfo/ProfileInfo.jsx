import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase/index'
import firebase from '../../firebase'
import UserInfoContext from '../../UserProvider'

// returns array of [email, displayName, profileImageUrl]
const ProfileInfo = props => {
    return (
        <UserInfoContext.Consumer>
            {(userInfo) => {
                return (
                    <div >

                        {/* Profile Info */}
                        <div>
                            <li><img src={userInfo[2]} alt="" height="100" width="100" className="profileImage" /></li>
                            <li><b style={{ marginLeft: "30px", textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>{userInfo[1]}</b></li>
                            <li><font size="2" style={{ marginLeft: "28px", textDecoration: "none", color: "#9FA3AF", zIndex: '100' }}>{userInfo[0]}</font></li>
                        </div>

                    </div>
                )
            }}
        </UserInfoContext.Consumer>

    )

}



export default ProfileInfo;


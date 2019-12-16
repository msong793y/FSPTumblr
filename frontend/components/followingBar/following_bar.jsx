import React, {useState, useEffect} from 'react';

export default function Following(props){

    const followings=
      Object.values(props.currentUser.followings)
    



    return(
        <div className = "Following-Container">
            <h3 className = 'YouAreFollowing'>You Are Following</h3>
            <div>
                {followings.map(following=>{
                    return (
                      <div className="Following-Item">
                        <img
                          src="/default_profile_pic.png"
                          className="FollowProfilePic"
                        />
                        <h4 className="FollowName">{following.username}</h4>
                        <div
                          className="UnfollowBotton"
                          onClick={() => props.deleteFollow(following)}
                        >
                          <img
                            className="UnfollowIcon"
                            src="/icons8-denied-30.png"
                          ></img>
                        </div>
                      </div>
                    ); 
                }) }

            </div>
        </div>
    )


}
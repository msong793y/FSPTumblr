import React, {useState, useEffect} from 'react';

export default function Following(props){

    const followings=
      Object.values(props.currentUser.followings)
    



    return (
      <div className="Following-Container">
        <h3 className="YouAreFollowing">FOLLOWING:</h3>
        <div>
          {followings.map((following, index) => {
            return (
              <div
                key={index}
                className="Following-Item Clickable"
                onClick={() => props.fetchSomePosts(following.id)}
              >
                <img
                  src="/default_profile_pic.png"
                  className="FollowProfilePic"
                />
                <h4 className="FollowName">{following.username}</h4>
                <div
                  className="UnfollowBotton Clickable"
                  onClick={() => props.deleteFollow(following)}
                >
                  <img
                    className="UnfollowIcon"
                    src="/icons8-denied-30.png"
                  ></img>
                </div>
              </div>
            );
          })}
          <div
            className="Following-Item ShowAllPost Clickable"
            onClick={() => props.fetchPosts()}
          >
            Show All Posts
          </div>
        </div>
        <div className="Following-Item ShowAllPost Clickable PostBar"
          onClick={() => props.activateModal("postingModal", null)}
          >
            Create Post
        </div>
      </div>
    );


}
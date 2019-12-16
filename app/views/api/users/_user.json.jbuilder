json.extract! user, :id, :username

json.followings do 
    json.array! user.followings do |following|
        json.partial! "api/users/user2", user: following
   end    
end
    

class Api::FollowsController < ApplicationController

    def create
        follow = Follow.new(follow_params)
        if follow.save
            @user = User.find_by(id: params[:follow][:follower_id])
            login!(@user) 
            render 'api/users/show'
        else
            render json: @follow.errors.full_messages, status: 404
        end
    end

    def destroy
        @follow= current_user.followed.find_by(follow_params)

         if @follow
            @follow.destroy
            @user = current_user;
            login!(@user) ;
            render 'api/users/show';
        else
            render json: @follow.errors.full_messages, status: 404
        end
       
    end



    private
    
    def follow_params
        params.require(:follow).permit(:following_id, :follower_id)
    end

end
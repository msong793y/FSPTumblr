class Follow < ApplicationRecord
    validates :following_id, uniqueness: {scope: [:follower_id, :following_id]}

    belongs_to :following,
        foreign_key: :following_id,
        class_name: :User

    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: :User
    
end
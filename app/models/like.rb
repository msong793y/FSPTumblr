class Like < ApplicationRecord
    validates :post_id, uniqueness: {scope: [:liker_id, :post_id]}

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post

    belongs_to :user,
        foreign_key: :liker_id,
        class_name: :User
    
end
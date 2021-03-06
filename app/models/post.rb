# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  body       :text
#  hashtags   :string
#  private    :boolean          default("false"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  op_name    :string           default("null")
#

# Table name: posts

#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  body       :text
#  hashtags   :string
#  private    :boolean          default("false"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null


class Post < ApplicationRecord

    validates :author_id, presence: true


    has_one_attached :content

    has_many :comments,
        foreign_key: :post_id,
        class_name: "Comment"


    belongs_to :author,
        foreign_key: :author_id,
        class_name: "User"

    has_many :likes,
        foreign_key: :post_id,
        class_name: "Like" 

    has_many :likers,
        through: :likes,
        source: :user
end

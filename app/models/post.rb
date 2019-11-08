# == Schema Information

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

    has_one_attached :photo

    belongs_to :user,
        foreign_key: :author_id,
        class_name: "User"
end

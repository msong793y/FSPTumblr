# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token

    attr_reader :password

    has_one_attached :prophoto

    has_many :posts,
        foreign_key: :author_id,
        class_name: "Post"

    has_many :comments,
        foreign_key: :author_id,
        class_name: "Comment"

    has_many :likes,
        foreign_key: :liker_id,
        class_name: "Like"

    has_many :followed,
        foreign_key: :follower_id,
        class_name: "Follow"
    
    has_many :followings,
        through: :followed,
        source: :following


    has_many :being_followed,
        foreign_key: :following_id,
        class_name: "Follow"   
        
    has_many :followers,
        through: :being_followed,
        source: :follower

    has_many  :liked_posts,
        through: :likes,
        source: :post

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        @user && @user.is_password?(password) ? @user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    private 
    
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end



end

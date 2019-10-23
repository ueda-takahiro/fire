class User < ApplicationRecord
  devise :database_authenticate, :registerable,
       :recoverable, :rememberable, :validatable
      #  belongs_to :nickname
      has_many :personality
      has_many :fireworks_name
      has_many :scores, through: :user_scores
end

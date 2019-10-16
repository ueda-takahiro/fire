class Score < ApplicationRecord
  belongs_to :nickname,class_name:"User",optional: true
  has_many :users, through: :user_scores
end

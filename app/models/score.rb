class Score < ApplicationRecord
  belongs_to :nickname,class_name:"User",optional: true
end

class UserScore < ApplicationRecord
  belongs_to :score
  belongs_to :user
end

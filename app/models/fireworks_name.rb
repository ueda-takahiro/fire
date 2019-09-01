class FireworksName < ApplicationRecord
  belongs_to :user
  belongs_to :personality
  has_one :image
  has_one :description
  
end

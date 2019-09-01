class Personality < ApplicationRecord
  has_ancestry
  has_many :fireworks_name
  belongs_to :user
end

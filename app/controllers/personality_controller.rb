class PersonalityController < ApplicationController
  def new
    @fire = Personality.new
    @category = Personality.where(ancestry: nil).order("id ASC")

  end
end

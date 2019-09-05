class PersonalityController < ApplicationController
  def new
    @fire =  Personality.new
    @category = Parsonality.where(ancestry:nil).order("id ASC")

  end
end

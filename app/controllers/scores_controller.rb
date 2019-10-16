class ScoresController < ApplicationController

  def new
    @fire = Score.new
    @category = Personality.where(ancestry: nil).order("id ASC")
  end
  def create
    @fire = Score.new(post_params)
    @fire.save
  end

  def show
  end

private
  def post_params
    params.require(:score).permit({score:[]}, {user_ids:[]})
  end
end

class CreateUserScores < ActiveRecord::Migration[5.2]
  def change
    create_table :user_scores do |t|
      t.integer :score_id, foreign_key: true
      t.integer :user_id, foreign_key: true
      t.timestamps
    end
  end
end

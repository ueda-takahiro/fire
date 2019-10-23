class CreateUserScores < ActiveRecord::Migration[5.2]
  def change
    create_table :user_scores do |t|
      t.integer :score, foreign_key: true
      t.integer :user, foreign_key: true
      t.timestamps
    end
  end
end

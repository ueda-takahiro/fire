class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :img
      t.integer :fireworks_name_id, foreign_key: true, null: false

      t.timestamps
    end
  end
end

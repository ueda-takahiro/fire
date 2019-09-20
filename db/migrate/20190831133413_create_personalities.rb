class CreatePersonalities < ActiveRecord::Migration[5.2]
  def change
    create_table :personalities do |t|
      t.string :point
      t.string :ancestry

      t.timestamps
    end
  end
end

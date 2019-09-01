class CreateFireworksNames < ActiveRecord::Migration[5.2]
  def change
    create_table :fireworks_names do |t|

      t.timestamps
    end
  end
end

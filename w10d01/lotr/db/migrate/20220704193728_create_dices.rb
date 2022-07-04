class CreateDices < ActiveRecord::Migration[6.1]
  def change
    create_table :dices do |t|

      t.timestamps
    end
  end
end

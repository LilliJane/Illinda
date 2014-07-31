class CreateWifiusers < ActiveRecord::Migration
  def change
    create_table :wifiusers do |t|
      t.integer :year
      t.text :month
      t.text :users
      t.text :gender
      t.text :nationality

      t.timestamps
    end
  end
end

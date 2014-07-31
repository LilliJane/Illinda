class CreateWificonsos < ActiveRecord::Migration
  def change
    create_table :wificonsos do |t|
      t.integer :year
      t.text :month
      t.text :news
      t.text :sessions
      t.text :hours
      t.text :up_b
      t.text :down_b
      t.text :up_gb
      t.text :down_gb

      t.timestamps
    end
  end
end

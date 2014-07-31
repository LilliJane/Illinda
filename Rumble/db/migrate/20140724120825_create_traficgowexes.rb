class CreateTraficgowexes < ActiveRecord::Migration
  def change
    create_table :traficgowexes do |t|
      t.text :date
      t.text :hour
      t.text :avrcv
      t.text :minrcv
      t.text :maxrcv
      t.text :avtr
      t.text :mintr
      t.text :maxtr

      t.timestamps
    end
  end
end

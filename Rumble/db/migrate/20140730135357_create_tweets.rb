class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.text :status
      t.text :username
      t.text :userscreen
      t.timestamps :posted

      t.timestamps
    end
  end
end

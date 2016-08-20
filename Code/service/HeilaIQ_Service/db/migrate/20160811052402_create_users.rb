class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.string :firstName
      t.string :lastName
      t.date :dob
      t.string :status

      t.timestamps null: false
    end
  end
end

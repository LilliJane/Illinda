require 'sqlite3'

begin
  db = SQLite3::Database.open "../Rumble/db/development.sqlite3"

	myFile = File.open("data.tsv", 'r+')
	i = 1
	while (i < 10)
		month = db.execute("SELECT month FROM wificonsos WHERE id = (?)", i)
		sessions = db.execute("SELECT sessions FROM wificonsos WHERE id = (?)", i)
		id = db.execute("SELECT id FROM wificonsos where id = (?)", i)
		puts month
		puts sessions
		puts "id = #{id}"
		myFile.write(month)
		if (i <= 7)
			myFile.write("\t\t")
		else
			myFile.write("\t")
		end
		myFile.write(sessions)
		myFile.write("\n")
		i += 1
	end
end
